


type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function OfficerLayout({ children, params }: Props) {
    return (
        <div className="">
            {children}
        </div>
    )
}