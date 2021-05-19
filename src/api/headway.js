export function fetchDoctors() {
    return new Promise((resolve) =>
        setTimeout(() => resolve([{
            name: 'Doctor Who',
            id: 1
        },
        {
            name: 'Doctor Death',
            id: 2
        }
        ]), 500)
    );
}
