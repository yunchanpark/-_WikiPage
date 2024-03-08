import React, { ReactNode } from 'react';

export type ListRenderItem<T> = (props: { item: T; index: number }) => ReactNode;

type ServerListComponentProps<T> = {
    data?: T[];
    wrapperClassName?: string | undefined;
    contentContainerClassName?: string | undefined;
    ListEmptyComponent?: React.FC;
    ListHeaderComponent?: React.FC;
    ListFooterComponent?: React.FC;
    renderItem: ListRenderItem<T>;
    keyExtractor: (item: T, index: number) => string;
};

export default function ServerListComponent<T>({
    data,
    wrapperClassName,
    contentContainerClassName,
    ListEmptyComponent,
    ListHeaderComponent,
    ListFooterComponent,
    renderItem,
    keyExtractor,
}: ServerListComponentProps<T>) {
    return (
        <div className={wrapperClassName}>
            {ListHeaderComponent && <ListHeaderComponent />}
            {data && data.length > 0 ? (
                <ul className={contentContainerClassName}>
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
