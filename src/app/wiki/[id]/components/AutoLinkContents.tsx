'use client';

import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

type AutoLinkContentsProps = {
    titleList: FetchTitleListResponse['titleList'];
    contents: string;
};

export default function AutoLinkContents({ titleList, contents }: AutoLinkContentsProps) {
    const [sanitizedContent, setSanitizedContent] = useState('');

    useEffect(() => {
        const linkedContent = titleList.reduce((prevLinkedContent, { title, id }) => {
            // HTML 태그를 고려하지 않는 제목용 간단한 이스케이프 처리
            const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            // 이미 <a> 태그 안에 있지 않은 텍스트에만 링크를 적용
            const regex = new RegExp(`(${escapedTitle})(?![^<]*>|[^<>]*<\/a)`, 'gi');

            return prevLinkedContent.replace(regex, (match) => {
                // 'title'이 이미 링크인지 확인 (간단한 체크)
                if (!/<a href="\/wiki\/[^"]+">[^<]+<\/a>/.test(match)) {
                    return `<a href="/wiki/${id}" class="wiki-link">${match}</a>`;
                }
                return match;
            });
        }, contents);

        setSanitizedContent(DOMPurify.sanitize(linkedContent));
    }, [contents, titleList]);

    return (
        <p
            className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-4"
            dangerouslySetInnerHTML={{
                __html: sanitizedContent,
            }}
        />
    );
}
