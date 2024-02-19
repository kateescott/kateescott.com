import React from "react";

export function Footer() {
    const year = React.useMemo(() => new Date().getFullYear().toString(), []);
    return (
        <div className="container">
            <div className="footer">
                <div className="footer__socials">
                    <a className="footer__socialsLink" target="_blank" href="https://www.linkedin.com/in/kateescott/"
                       title="Linkedin" aria-label="Linkedin"><i
                        className="icon-linkedin-square"></i></a>
                </div>
                <div className="footer__blurbText">&copy; Kate Scott {year}</div>
            </div>
        </div>
    )

}
