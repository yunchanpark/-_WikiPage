type Wiki = {
    id: string;
    title: string;
    contents: string;
};

type CreateWikiRequest = {
    title: string;
    contents: string;
};

type CreateWikiResponse = {
    msg: string;
};
