export const getButtonOptions = (free: boolean, busyUntil: string | undefined) => {
    let buttonText = 'Забронировать';
    let buttonStyle = 'active';

    if (!free) {
        buttonText = busyUntil ? `занята до ${busyUntil}` : 'Забронирована';
        buttonStyle = busyUntil ? 'busy' : 'booked';
    }

    return { buttonText, buttonStyle };
}