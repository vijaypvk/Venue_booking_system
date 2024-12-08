import loadingOuter from '../assets/outer.png';
import loadingInner from '../assets/inner.png';

function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] backdrop-blur-md flex justify-center items-center">
            <div className="relative">
                <img className="h-26" src={loadingOuter} alt="Loading" />
                <img
                    className="absolute inset-0 h-22 animate-spin "
                    src={loadingInner}
                    alt="Loading Inner"
                />
                
            </div>
        </div>
    );
}

export default Loading;
