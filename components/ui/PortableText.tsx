import { PortableText as PortableTextReact } from '@portabletext/react'
import Link from 'next/link'

interface PortableTextProps {
    value: any
    className?: string
}

const slugify = (text: string) =>
    text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

const cleanBrandName = (val: any): any => {
    if (typeof val === 'string') {
        return val
            .replace(/Axiom AI/g, "SyncOrigins")
            .replace(/AxiomAI/g, "SyncOrigins")
            .replace(/Sync Origin/g, "SyncOrigins");
    }
    if (Array.isArray(val)) {
        return val.map(cleanBrandName);
    }
    if (val && typeof val === 'object') {
        const cleaned: any = {};
        for (const key in val) {
            cleaned[key] = cleanBrandName(val[key]);
        }
        return cleaned;
    }
    return val;
};

const components = {
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl font-bold mb-4">{children}</h1>
        ),
        h2: ({ children, value }: any) => {
            const id = slugify(value.children[0].text);
            return <h2 id={id} className="text-3xl font-bold mb-3 mt-12 scroll-mt-24">{children}</h2>
        },
        h3: ({ children, value }: any) => {
            const id = slugify(value.children[0].text);
            return <h3 id={id} className="text-2xl font-bold mb-3 mt-8 scroll-mt-24">{children}</h3>
        },
        h4: ({ children }: any) => (
            <h4 className="text-xl font-bold mb-2 mt-4">{children}</h4>
        ),
        h5: ({ children }: any) => (
            <h5 className="text-lg font-bold mb-2 mt-4">{children}</h5>
        ),
        h6: ({ children }: any) => (
            <h6 className="text-base font-bold mb-2 mt-4">{children}</h6>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary-500 pl-4 py-1 my-4 bg-neutral-50 italic text-neutral-700 rounded-r">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className="mb-4 last:mb-0">{children}</p>
        ),
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
        em: ({ children }: any) => <em className="italic">{children}</em>,
        code: ({ children }: any) => (
            <code className="bg-neutral-100 text-primary-700 px-1.5 py-0.5 rounded text-sm font-mono border border-neutral-200">
                {children}
            </code>
        ),
        underline: ({ children }: any) => <span className="underline decoration-primary-300 decoration-2 underline-offset-2">{children}</span>,
        "strike-through": ({ children }: any) => <span className="line-through text-neutral-500">{children}</span>,
        link: ({ value, children }: any) => {
            const target = value?.href?.startsWith('http') ? '_blank' : undefined
            return (
                <a
                    href={value?.href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="text-blue-600 hover:text-blue-700 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
                >
                    {children}
                </a>
            )
        },
        internalLink: ({ value, children }: any) => {
            const { reference } = value;
            let href = '#';
            if (reference) {
                const slug = reference.slug?.current;
                const type = reference._type;
                
                switch (type) {
                    case 'post': 
                        href = slug ? `/insights/${slug}` : '/insights'; 
                        break;
                    case 'service': 
                        href = slug ? `/services/${slug}` : '/services'; 
                        break;
                    case 'homePage': href = '/'; break;
                    case 'aboutPage': href = '/about'; break;
                    case 'servicesPage': href = '/services'; break;
                    case 'useCasesPage': href = '/solutions'; break;
                    case 'aiImplementationPage': href = '/ai-implementation'; break;
                    case 'erpTransformationPage': href = '/erp-transformation'; break;
                    case 'dataAnalyticsPage': href = '/data-analytics'; break;
                    case 'managedDeliveryPage': href = '/managed-delivery'; break;
                    case 'sustainabilityPage': href = '/sustainability'; break;
                    case 'contactPage': href = '/contact'; break;
                    case 'blogPage': href = '/insights'; break;
                    default: href = '/';
                }
            }
            
            return (
                <Link 
                    href={href} 
                    className="text-primary-600 hover:text-primary-700 font-medium underline decoration-primary-300 hover:decoration-primary-600 transition-colors"
                >
                    {children}
                </Link>
            )
        },
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-outside ml-5 mb-4 space-y-2 leading-relaxed">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-outside ml-5 mb-4 space-y-2 leading-relaxed">{children}</ol>,
    },
}

export function PortableText({ value, className = '' }: PortableTextProps) {
    if (!value) return null

    // For backwards compatibility: if value is a string, render it as a paragraph
    if (typeof value === 'string') {
        return (
            <div className={className}>
                <p className="mb-4 last:mb-0 leading-relaxed">{value}</p>
            </div>
        )
    }

    const cleanedValue = cleanBrandName(value);

    return (
        <div className={`prose-clean ${className}`}>
            <PortableTextReact value={cleanedValue} components={components} />
        </div>
    )
}
