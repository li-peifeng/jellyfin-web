import { QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { ApiProvider } from 'hooks/useApi';
import { UserSettingsProvider } from 'hooks/useUserSettings';
import { WebConfigProvider } from 'hooks/useWebConfig';
import { queryClient } from 'utils/query/queryClient';

export const renderComponent = <P extends object> (
    Component: React.FC<P>,
    props: P,
    element: HTMLElement
) => {
    const root = createRoot(element);
    root.render(
        <RootContext>
            <Component {...props} />
        </RootContext>
    );

    return () => setTimeout(() => root.unmount());
};

const RootContext: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ApiProvider>
                <UserSettingsProvider>
                    <WebConfigProvider>
                        {children}
                    </WebConfigProvider>
                </UserSettingsProvider>
            </ApiProvider>
        </QueryClientProvider>
    );
};
