import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className={"footer-container"}>
                <Link href="/faq">
                    <a>FAQ</a>
                </Link>
                <span>|</span>
                <Link href="https://etherscan.io/address/backstopsyndicate.eth">
                    <a>ETHERSCAN</a>
                </Link>
                <span>|</span>
                <a href="https://github.com/backstop-syndicate" title="Github Page">GITHUB</a>
                <span>|</span>
                <a href="https://t.me/backstopsyndicate">TELEGRAM</a>
            </div>

            <style jsx>{`
                .footer-container {
                    margin: auto;
                    max-width: 512px;
                    width: 100%;
                    padding: 24px;
                    box-sizing: border-box;
                    text-align: center;
                }
                
                .footer-container a,  .footer-container span {
                    text-align: center;
                    color: #FFFFFF;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 19px;
                }
                
                .footer-container a {
                    padding: 0 5px;
                }
            `}
            </style>
        </footer>
    );
}