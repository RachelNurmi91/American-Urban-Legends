import { useSpring, animated } from "@react-spring/web";

const Banner = () => {

    const [springs, api] = useSpring(() => ({
        from: { x: -300 },
    }));

    const handleAnimationClick = () => {
        api.start({
            from: {
                x:-300,
            },
            to: {
                x:50,
            },
        })
    }

    return (
        <div id="banner" className="d-flex justify-content-center">
            <animated.div
            onClick={handleAnimationClick}
            style={{

                ...springs,
            }}
            >
                <h1 className="title-banner text-white">AMERICAN URBAN LEGENDS</h1>
            </animated.div>
        </div>
    )

};

export default Banner;
