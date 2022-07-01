import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'SQL Worksheet',
        path: '#',
        icon: <AiIcons.AiOutlineCode />,
    },
    {
        title: 'Schema',
        path: '/schema',
        icon: <AiIcons.AiFillDatabase />,
        iconClosed: <RiIcons.RiArrowDownSFill />, 
        iconOpened: <RiIcons.RiArrowUpSFill />, 
        subNav:[
            {
                title: 'Table 1',
                path: '/schema/table1',
                icon: <RiIcons.RiDatabaseFill />,
            },
            {
                title: 'Table 2',
                path: '/schema/table2',
                icon: <RiIcons.RiDatabaseFill />,
            },
            {
                title: 'Table 3',
                path: '/schema/table3',
                icon: <RiIcons.RiDatabaseFill />,
            }
        ]
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaUserAlt/>,
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle />,
        
    }
]