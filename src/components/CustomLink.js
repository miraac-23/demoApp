import { useRouter } from 'next/router';

const CustomLink = ({ href, onClick, children }) => {
    const router = useRouter();
    const hrefClick = (e) => {
        e.preventDefault();
        router.push(href);
        if (onClick != null && typeof onClick === 'function') {
            onClick(e);
        }
    };

    return (
        <a href={href} onClick={hrefClick} className="no-underline link">
            {children}
        </a>
    );
};

export default CustomLink;
