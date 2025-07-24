import React from "react"
import { WithClassNames } from "@/types"
import clsx from "clsx"
import { Image, Spacer } from "@heroui/react"
import { zenDotsFont } from "@/fonts"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks"

export enum Chef {
  Pose1 = "pose1",
  Pose2 = "pose2",
  Pose3 = "pose3",
  Pose4 = "pose4",
  Pose5 = "pose5",
}

export const chefMap = {
    [Chef.Pose1]: {
        image: "/chefs/pose-1.png",
        name: "Chef pose 1",
    },
    [Chef.Pose2]: {
        image: "/chefs/pose-2.png",
        name: "Chef pose 2",
    },
    [Chef.Pose3]: {
        image: "/chefs/pose-3.png",
        name: "Chef pose 3",
    },
    [Chef.Pose4]: {
        image: "/chefs/pose-4.png",
        name: "Chef pose 4",
    },
    [Chef.Pose5]: {
        image: "/chefs/pose-5.png",
        name: "Chef pose 5",
    },
}

export enum Divider {
    Pallete1 = "pallete1",
    Pallete2 = "pallete2",
    Pallete3 = "pallete3",
    Pallete4 = "pallete4",
    Pallete5 = "pallete5",
  }
  
export const dividerMap: Record<Divider, { className: string }> = {
    [Divider.Pallete1]: {
        className: "bg-[linear-gradient(to_bottom,_#00FFD7,_#E5FFFB)]",
    },
    [Divider.Pallete2]: {
        className: "bg-[linear-gradient(to_bottom,_#FF3C3C,_#FF1EFB)]",
    },
    [Divider.Pallete3]: {
        className: "bg-[linear-gradient(to_bottom,_#272EFF,_#43E6FF)]",
    },
    [Divider.Pallete4]: {
        className: "bg-[linear-gradient(to_bottom,_#FFBF00,_#F8FF99)]",
    },
    [Divider.Pallete5]: {
        className: "bg-[linear-gradient(to_bottom,_#FF009D,_#FF9ECB)]",
    },
}

export type ProcessStepCardClassNames = {
  base: string;
  container: string;
  title: string;
  subTitle: string;
  descriptions: string;
  image: string;
  imageWrapper: string;
  index: string;
  divider: string;
};

interface ProcessStepCard extends WithClassNames<ProcessStepCardClassNames> {
  title: string;
  subTitle: string;
  descriptions: Array<{ key: string; value: string }>;
  image: string;
  index?: string;
  leftToRight?: boolean; // default is true
  chef?: Chef;
  divider?: Divider;
}

export const ProcessStepCard = ({
    title,
    subTitle,
    descriptions,
    className,
    classNames,
    leftToRight = true,
    index = "01.",
    chef = Chef.Pose1,
    divider = Divider.Pallete1,
}: ProcessStepCard) => {
    const isMobile = useIsMobile()
    return (    
        <div
            className={clsx("w-full flex", classNames?.base, className, {
                "flex-row-reverse": !leftToRight,
            })}
        >
            <div
                className={clsx(
                    classNames?.container,
                    "flex gap-12 items-end",
                    "bg-gradient-to-r p-6",
                    {
                        "rounded-r-full pr-32 from-primaryFrom/0 to-primary/50": leftToRight,
                        "rounded-l-full pl-32 from-primary/50 to-primaryFrom/0": !leftToRight,
                        "flex-row-reverse": !leftToRight,
                        "!rounded-none !p-6 w-full !gap-6": isMobile,
                    }
                )}
            >
                <div className="flex gap-6 items-stretch items-center flex-1">
                    <div className={clsx(classNames?.divider, dividerMap[divider].className, "w-2")}></div>
                    <div className="flex flex-col justify-center">
                        <div
                            className={clsx(
                                classNames?.index,
                                zenDotsFont.className,
                                "text-[48px] md:text-[64px] leading-none"
                            )}
                        >
                            <h1>{index}</h1>
                        </div>
                        <Spacer y={4} />
                        <div>
                            <div
                                className={clsx(classNames?.title, "text-2xl leading-none")}
                            >
                                {title}
                            </div>
                            <Spacer y={2} />
                            <div
                                className={clsx(classNames?.subTitle, "text-lg leading-none")}
                            >   
                                {`(${subTitle})`}
                            </div>
                        </div>
                        <Spacer y={4} />
                        <div className={clsx(classNames?.descriptions)}>
                            {descriptions.map(({ key, value }) => (
                                <li key={key}>{value}</li>
                            ))}
                        </div>
                    </div>
                </div>        
                <motion.div
                    className={clsx(
                        classNames?.imageWrapper, 
                        "relative",
                        "w-[160px] h-[120px]",
                        "sm:w-[400px] sm:h-[300px]",
                    )}
                    animate={{
                        y: [0, -5, 0], // bounce
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                    
                >
                    <Image
                        src={chefMap[chef].image}
                        alt={chefMap[chef].name}
                        removeWrapper
                        className={clsx(
                            classNames?.image,
                            "absolute bottom-0 left-1/2",
                            "w-fit h-fit min-w-fit min-h-fit",
                            "origin-[50%_100%]"
                        )}
                        style={{ 
                            transform: isMobile ? "translateX(-50%) scale(0.4)" : "translateX(-50%)"
                        }}
                    />
                </motion.div>
            </div>
        </div>
    )
}
