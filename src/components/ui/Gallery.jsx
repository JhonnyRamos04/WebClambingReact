// maybe put de img with promps and react
import './Gallery.css'

export const Gallery = () => {
    return (
        <div className='gallery-container shadow-lg shadow-gray-900 rounded-md'>
            <img
                src='/MountainLandscape-1.jpg'
                alt='MountainLandscape-1'
                className='rounded-l-md'
            />
            <img src='/MountainLandscape-2.jpg' alt='MountainLandscape-2' />
            <img
                src='/MountainLandscape-3.jpg'
                alt='MountainLandscape-3'
                className='rounded-r-md'
            />
        </div>
    )
}
