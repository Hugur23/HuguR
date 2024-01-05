export default function FullWidthImage({image, alt}: {image: string, alt?: string}) {
    return (
        <img className='aspect-auto w-full' src={image} alt={alt} />
    )
}