import Image from "next/image";
import SectionTitle from "./SectionTitle";
import BottomLine from '/public/images/bottom-line.svg';

interface Props {
    id: string;
    title: string;
    description?: string;
    sectionClassName?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children, sectionClassName='' }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className={`mt-10 lg:mt-20 text-center mx-auto ${sectionClassName}`}>
            <SectionTitle>
                <h2 className="text-center mb-2 text-white">{title}</h2>
            </SectionTitle>
            {description && <p className="mb-12 text-center">{description}</p>}
            <Image src={BottomLine} alt="bottom line" className="mx-auto mb-4" />
            {children}
        </section>
    )
}

export default Section