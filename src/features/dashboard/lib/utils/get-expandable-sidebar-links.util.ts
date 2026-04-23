import { ISidebarSection } from "../types/sidebar";

const getExpandableLinks = (sections: ISidebarSection[]) => {
    return sections
        .flatMap(section => section.links)
        .filter(link => Array.isArray(link.subLinks) && link.subLinks.length > 0)
        .map(link => link.id);
};

export { getExpandableLinks };