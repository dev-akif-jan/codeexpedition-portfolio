import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    to,
    onClick,
    type = 'button',
    ...props
}) => {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-brand-primary text-white hover:bg-brand-primaryDark shadow-md hover:shadow-lg focus:ring-brand-primary",
        secondary: "bg-brand-secondaryLight text-brand-primaryDark hover:bg-brand-secondary focus:ring-brand-secondary",
        outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary",
        ghost: "text-brand-primary hover:bg-brand-secondaryLight focus:ring-brand-primary",
        link: "text-brand-primary hover:text-brand-primaryDark underline-offset-4 hover:underline p-0 h-auto",
        danger: "bg-status-error text-white hover:bg-red-700 focus:ring-status-error",
        white: "bg-white text-text-primary hover:bg-gray-50 border border-border-subtle shadow-sm"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "p-2",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={combinedClassName} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
