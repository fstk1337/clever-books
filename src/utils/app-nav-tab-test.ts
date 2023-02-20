export const getDataTestId = (route: string, view: 'main' | 'adaptive') => {
    if (route === '/rules') {
        if (view === 'main') {
            return 'navigation-terms';
        }

        return 'burger-terms';
    }
    if (route === '/public-offer') {
        if (view === 'main') {
            return 'navigation-contract';
        }

        return 'burger-contract';
    }

    return undefined;
}