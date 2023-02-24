import { FC } from 'react';

import { BookTitleHighlighterProps } from './book-title-highlighter-props';

import './book-title-highlighter.scss';

export const BookTitleHighlighter:FC<BookTitleHighlighterProps> = ({ children, highlight }) => {
    if (highlight === '') {
        return children;
    }
    const matchPattern = new RegExp(`${highlight}`, 'gi');
    const splitPattern = new RegExp('<jopa>', 'gi');
    let text: string = children.props.children;

    text = text.replace(matchPattern, match => `<jopa>${match}<jopa>`);
    const parts: string[] = text.split(splitPattern);
    let id = parts.length;

    return (
        <div className={children.props.className}>
            {parts.map((part) => {
                if (part.toLowerCase() === highlight.toLowerCase()) {
                    id -= 1;

                    return (
                        <span key={id} className='highlighted' data-test-id='highlight-matches'>
                            { part }
                        </span>
                    )
                }

                return part;
                }
            )}
        </div>
    )
}