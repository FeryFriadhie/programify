import useTypedPage from '@/Hooks/useTypedPage';
import React from 'react';

interface Props {
    data: any;
    section: string;
    child: string;
}

export default function Headerbar({ data, section, child }: Props) {
    return (
        <div className="mx-auto max-w-screen-lg lg:max-w-screen-2xl xl:max-w-screen-xl">
            <div className="flex items-center gap-x-2">
                <a
                    className="flex items-center"
                    href={`/${data.props.user.username}`}
                >
                    <img
                        className="w-7 h-7 rounded-full sm:mr-2"
                        src={data.props.user.profile_photo_url}
                        alt="Anto Wiranto"
                    />
                    <span className="hidden sm:inline">
                        {data.props.user.name}
                    </span>
                </a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
                {section}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="text-gray-400 capitalize">{child}</span>
            </div>
        </div>
    );
}
