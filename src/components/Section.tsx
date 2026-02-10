"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import BottomLine from '../../public/images/bottom-line.svg';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
    id: string;
    title: string;
    description?: string;
    sectionClassName?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children, sectionClassName='' }: React.PropsWithChildren<Props>) => {
    const ref = useScrollAnimation(0.2);
    
    return (
        <section id={id} className={`mt-10 lg:mt-20 text-center mx-auto ${sectionClassName}`}>
            <div ref={ref as any} className="animate-on-scroll">
                <SectionTitle>
                    <h2 className="text-center mb-2 text-white">{title}</h2>
                </SectionTitle>
                {description && <p className="mb-12 text-center">{description}</p>}
                <Image src={BottomLine} alt="bottom line" className="mx-auto mb-4" />
            </div>
            {children}
        </section>
    )
}

export default Section