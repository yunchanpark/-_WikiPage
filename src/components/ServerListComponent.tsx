import React, { ReactNode } from 'react';

export type ListRenderItem<T> = (props: { item: T; index: number }) => ReactNode;

type ServerListComponentProps<T> = {
    data?: T[];
    renderItem: ListRenderItem<T>;
    keyExtractor: (item: T, index: number) => string;
    ListEmptyComponent?: React.FC;
    ListHeaderComponent?: React.FC;
    ListFooterComponent?: React.FC;
};

export default function ServerListComponent<T>({
    data,
    renderItem,
    keyExtractor,
    ListEmptyComponent,
    ListHeaderComponent,
    ListFooterComponent,
}: ServerListComponentProps<T>): JSX.Element {
    return (
        <div>
            {ListHeaderComponent && <ListHeaderComponent />}
            {data && data.length > 0 ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={keyExtractor(item, index)}>{renderItem({ item, index })}</li>
                    ))}
                </ul>
            ) : (
                ListEmptyComponent && <ListEmptyComponent />
            )}
            {ListFooterComponent && <ListFooterComponent />}
        </div>
    );
}
