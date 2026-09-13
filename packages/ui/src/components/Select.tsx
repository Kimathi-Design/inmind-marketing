"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, CheckIcon } from "./icons";
import { cn } from "../lib/cn";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectGroup = SelectPrimitive.Group;

export function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "group inline-flex h-11 w-full items-center justify-between gap-3 rounded-[13px]",
        "border border-[var(--im-line)] bg-white/70 px-3.5 text-left text-[14px]",
        "tracking-[-0.01em] text-[var(--im-ink)] backdrop-blur-md",
        "transition-[border-color,box-shadow,background] duration-200",
        "hover:border-[var(--im-line-strong)] hover:bg-white",
        "focus:outline-none focus:border-[var(--im-ink)]/25 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]",
        "data-[placeholder]:text-[var(--im-muted-2)]",
        "disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown
          size={15}
          className="text-[var(--im-muted)] transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        sideOffset={8}
        className={cn(
          "z-50 overflow-hidden rounded-[16px] border border-[var(--im-line)]",
          "bg-white/90 shadow-[var(--im-shadow-lg)] backdrop-blur-xl",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
          "min-w-[var(--radix-select-trigger-width)]",
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1.5">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-[11px]",
        "py-2.5 pl-3 pr-9 text-[13.5px] tracking-[-0.01em] text-[var(--im-ink)] outline-none",
        "data-[highlighted]:bg-black/[0.04]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="absolute right-3 text-[var(--im-ink)]">
        <CheckIcon size={14} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

export function SelectLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--im-muted)]",
        className
      )}
      {...props}
    />
  );
}

export function SelectSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn("my-1.5 h-px bg-[var(--im-line)]", className)}
      {...props}
    />
  );
}

export function FieldSelect({
  label,
  className,
  children,
  ...props
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Select>) {
  return (
    <label className={cn("flex w-full flex-col gap-2", className)}>
      {label ? (
        <span className="text-[13px] font-medium tracking-[-0.01em] text-[var(--im-ink)]">
          {label}
        </span>
      ) : null}
      <Select {...props}>{children}</Select>
    </label>
  );
}
