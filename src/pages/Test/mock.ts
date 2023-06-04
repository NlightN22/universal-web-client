import {HeaderActionProps} from "../../features/header/header";

export const testHeaderLinks: HeaderActionProps =
    {
        links: [
            {link: `testLink${Math.random()}`, label: `testLink${Math.random()}`, links: []},
            {link: `testLink${Math.random()}`, label: `testLink${Math.random()}`, links: []},
            {link: `testLink${Math.random()}`, label: `testLink${Math.random()}`, links: []},
        ]
    }
