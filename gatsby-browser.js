exports.onRouteUpdate = ({location, prevlocation}) => {
    console.log('location', location.pathname)
    console.log('previous location', prevlocation ? prevlocation.pathname : null)
}
