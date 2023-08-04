'use client';
import Link from 'next-intl/link';

// The title of the link in the sidebar, and where it leads to.
export interface sidebarLink {
  title: string;
  link: string;
}

export interface SidebarItemProps {
  link: sidebarLink;
  isSelected?: boolean;
  setSelected?: any;
}

export default function SidebarItem({
  link,
  isSelected = false,
  setSelected,
}: SidebarItemProps) {
  const selectedSettings = isSelected ? 'bg-lm-whitesmoke-dark font-bold' : '';

  // Highlight selected item
  function handleClick() {
    if (setSelected != undefined) {
      setSelected(link.title);
    }
  }

  return (
    <Link
      href={link.link}
      onClick={handleClick}
      className={
        'py-3 hover:bg-lm-light flex flex-row text-lg text-lm-dark ' +
        selectedSettings
      }
    >
      <div className="w-7">{isSelected ? '—' : ''}</div>
      <h1>{link.title}</h1>
    </Link>
  );
}
