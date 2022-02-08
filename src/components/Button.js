Function Button() {

    const variants = {
        "outline-yellow": 'text-yellow-300 border-yellow-300 rounded-full', 
        "fill-yellow": 'bg-yellow-300 rounded-full mt-10'
    }
    
    const pickedVariants = variants [variant];

    return (
        <div className="text-center">
            <a className="font-semibold text-yellow-300 border-yellow-300 rounded-full px-6 py-2"></a>
        </div>
    );
}

export default Button