import React from 'react';
import APITokenManager from '@/Partials/API/APITokenManager';
import AppLayout from '@/Layouts/AppLayout';
import { ApiToken } from '@/types';
import useTypedPage from '@/Hooks/useTypedPage';
import Headerbar from '@/Components/Headerbar';

interface Props {
    tokens: ApiToken[];
    availablePermissions: string[];
    defaultPermissions: string[];
}

export default function ApiTokenIndex({
    tokens,
    availablePermissions,
    defaultPermissions,
}: Props) {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-5 px-5 lg:px-9 xl:px-8">
                <APITokenManager
                    tokens={tokens}
                    availablePermissions={availablePermissions}
                    defaultPermissions={defaultPermissions}
                />
            </div>
        </div>
    );
}

ApiTokenIndex.layout = (page: JSX.Element) => (
    <AppLayout
        children={page}
        title={'API Tokens'}
        renderHeader={() => (
            <Headerbar data={page} section="API" child="Create API Token" />
        )}
    />
);
