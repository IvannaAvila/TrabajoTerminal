
function Loader({ className, color, size }) {
    let buttonColor = color || "bg-primary";
    let sz = "w-3 h-3";
    if (size === "sm") {
        sz = "w-2 h-2";
    } else if (size === "lg") {
        sz = "w-4 h-4";
    } else if (size === "xl") {
        sz = "w-6 h-6";
    } else {
        sz = "w-4 h-4";
    }
    let classNameButton = `${sz} rounded-full animate-pulse ${buttonColor} `;
    const title = "loading";
    classNameButton += className;
    return (
        <>
            <div className="flex my-5 mx-auto gap-2 justify-center">
                <div className={classNameButton}></div>
                <div className={classNameButton + " delay-100"}></div>
                <div className={classNameButton + " delay-200"}></div>
            </div>
        </>
    );
}

export default Loader;
