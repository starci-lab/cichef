import { Title } from "@/components"
import { Card, CardBody, Spacer, Image, Button, CardFooter, Chip } from "@heroui/react"
import { GithubLogoIcon, LinkedinLogoIcon, TelegramLogoIcon, XLogoIcon } from "@phosphor-icons/react"
import React from "react"

export const OurTeam = () => {
    const team = [
        {
            key: "stacy-nguyen",
            name: "Stacy Nguyen",
            title: "Founder & CEO",
            image: "teams/stacy-nguyen.jpg",
            description:
              "With a background in mathematics and solution architecture, Stacy brings 3+ years of hands-on experience in building DeFi systems. He has a deep understanding of decentralized application and protocol design.",
            x: "https://x.com/0xstacynguyen",
            linkedln: "https://www.linkedin.com/in/stacy-nguyen-375b41324/",
            telegram: "https://t.me/tucuong183",
            github: "https://github.com/starci183"
        },
        {
            key: "uydev",
            name: "Uydev",
            title: "CTO",
            image: "teams/uydev.jpg",
            description:
              "Uydev leads the technical vision of the team. With strong expertise in blockchain engineering and infrastructure, he architects scalable systems and ensures top-tier code quality across all products.",
            github: "https://github.com/uydev"
        },
    ]
    return (
        <div className="max-w-[1024px] mx-auto px-6 relative">
            <Title
                variant="gradient2"
                className="text-center uppercase"
                text="Our team"
            />
            <Spacer y={12} />
            <div className="grid sm:grid-cols-3 gap-x-4 gap-y-12 place-items-stretch">
                {team.map((member) => (
                    <Card key={member.key}>
                        <CardBody>
                            <div className="flex flex-col gap-2">
                                <Image
                                    classNames={{
                                        wrapper: "w-full aspect-square min-w-full"
                                    }}
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-contain"
                                />
                                <Title
                                    text={member.name}
                                    variant="primary"
                                    className="!text-lg"
                                />
                                <Chip variant="flat">
                                    {member.title}
                                </Chip>
                                <div className="text-sm text-gray-500">
                                    {member.description}
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div>
                                <div className="flex gap-2 items-center">
                                    {
                                        member.github && (
                                            <Button
                                                isIconOnly
                                                variant="light"
                                                onPress={() => window.open(member.github, "_blank")}
                                            >
                                                <GithubLogoIcon />
                                            </Button>
                                        )}
                                    {
                                        member.x && (
                                            <Button
                                                isIconOnly
                                                variant="light"
                                                onPress={() => window.open(member.x, "_blank")}
                                            >
                                                <XLogoIcon />
                                            </Button>
                                        )}
                                    {
                                        member.linkedln && (
                                            <Button
                                                isIconOnly
                                                variant="light"
                                                onPress={() => window.open(member.linkedln, "_blank")}
                                            >
                                                <LinkedinLogoIcon />
                                            </Button>
                                        )}
                                    {
                                        member.telegram && (
                                            <Button
                                                isIconOnly
                                                variant="light"
                                                onPress={() => window.open(member.telegram, "_blank")}
                                            >
                                                <TelegramLogoIcon />
                                            </Button>
                                        )}
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}