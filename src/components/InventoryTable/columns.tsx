import { ColumnDef } from '@tanstack/react-table';

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface IItem {
  id: string;
  name: string;
  type: 'A' | 'B' | 'C' | 'D';
  amount: number;
}

export const columns: ColumnDef<IItem>[] = [
  {
    accessorKey: 'name',
    header: () => <div>Name</div>,
    cell: ({ row }) => {
      return <div className='font-medium'>{row.getValue('name')}</div>;
    },
  },
  {
    accessorKey: 'type',
    header: () => <div className='text-center'>Type</div>,
    cell: ({ row }) => {
      return (
        <div className='text-center font-medium'>{row.getValue('type')}</div>
      );
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className='text-center'>Amount</div>,
    cell: ({ row }) => {
      return (
        <div className='text-center font-medium'>{row.getValue('amount')}</div>
      );
    },
  },
  {
    accessorKey: 'Actions',
    header: () => <div className='text-center'>Actions</div>,
    id: 'actions',
    size: 10,
    cell: ({ row }) => {
      const item = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='flex justify-center w-full'>
              <Button variant='ghost' className='h-8 w-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(item.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
