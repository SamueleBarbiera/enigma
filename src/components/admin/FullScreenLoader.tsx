import Spinner from './Spinner'

const FullScreenLoader = () => {
    return (
        <div className="fixed h-screen w-screen">
            <div className="absolute top-64 left-1/2 -translate-x-1/2">
                <Spinner width={8} height={8} color={'bg-blue-600'} bgColor={'bg-blue-900'} />
            </div>
        </div>
    )
}

export default FullScreenLoader
