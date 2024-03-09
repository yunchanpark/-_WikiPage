#! bash

# mongo network 생성
if [ -z "$(docker network ls | grep mongoCluster)" ]; then
    docker network create mongoCluster
    echo "Docker network 'mongoCluster' created."
else
    echo "Docker network 'mongoCluster' already exists."
fi

# mongo image pull
if [ -z "$(docker images -q mongo)" ]; then
    docker pull mongo
    echo "Mongo image pulled."
else
    echo "Mongo image already exists."
fi

# docker compose
docker-compose up -d

# /etc/hosts DNS host 설정
hosts_entries=(
"127.0.0.1 mongo1"
"127.0.0.1 mongo2"
"127.0.0.1 mongo3"
)

for entry in "${hosts_entries[@]}"; do
    if ! grep -q "$entry" /etc/hosts; then
        echo "$entry" | sudo tee -a /etc/hosts > /dev/null
        echo "Added to /etc/hosts: $entry"
    else
        echo "Entry already exists in /etc/hosts: $entry"
    fi
done

sleep 15

# mongodb replica set 설정
echo "Initializing replica set..."
docker exec -it mongo1 mongosh --port 27017 --username admin --password 1234 --eval "rs.initiate({
    _id: \"myReplicaSet\",
    members: [
        {_id: 0, host: \"mongo1:27017\", \"priority\": 2},
        {_id: 1, host: \"mongo2:27017\", \"priority\": 0.5},
        {_id: 2, host: \"mongo3:27017\", \"priority\": 0.5}
    ]
})"
echo "Replica set initialized."
