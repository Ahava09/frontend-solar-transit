import Image from "../form/Image";

const Logo = ( {societyLogo, societyName} ) => {

    return (
        <>
            <Image imageSource={societyLogo} classes="h-8" alternativeText="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                { societyName }
            </span>
        </>
    )

};

export default Logo;
