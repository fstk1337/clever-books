export const getRouteLastWord = (route: string) => (
    route.split('/').at(-1)
);