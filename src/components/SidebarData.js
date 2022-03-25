import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Network',
    path: '/network',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Dashboard',
        path: '/network/dashboard',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Cluster',
        path: '/network/cluster',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Wireless',
        path: '/network/wireless',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Satellite',
        path: '/network/satellite',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'POP',
        path: '/network/pop',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: '1',
        path: '/inventory/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '2',
        path: '/inventory/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: '3',
        path: '/inventory/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
  
];
