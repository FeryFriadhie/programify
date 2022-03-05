import CreateTeamForm from '@/Partials/Teams/CreateTeamForm';
import AppLayout from '@/Layouts/AppLayout';
import React from 'react';
import Headerbar from '@/Components/Headerbar';

export default function Create() {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <CreateTeamForm />
            </div>
        </div>
    );
}

Create.layout = (page: JSX.Element) => (
    <AppLayout
        children={page}
        title="Create Team"
        renderHeader={() => (
            <Headerbar data={page} section="Teams" child="Create Team" />
        )}
    />
);
