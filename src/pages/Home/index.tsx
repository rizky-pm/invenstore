import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { IItem, columns } from '@/components/InventoryTable/columns';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DataTable } from '@/components/InventoryTable/data-table';

const DATA_TABLE: IItem[] = [
  {
    id: '728ed52f',
    amount: 100,
    name: 'Product Z',
    type: 'B',
  },

  {
    id: '728ed52g',
    amount: 150,
    name: 'Item X',
    type: 'C',
  },
];

const Home = () => {
  return (
    <main className='p-6 ml-[15%] w-full'>
      <div className='flex justify-end w-full'>
        <h1 className='text-4xl font-bold mr-auto'>Invenstore</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button size={'sm'}>
              <PlusCircle className='w-4 h-4 mr-2' />
              <span>Add Product</span>
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-md'>
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Add new product to your inventory.
              </DialogDescription>
            </DialogHeader>
            <div className='flex items-center space-x-2'>
              <form className='grid grid-cols-4 gap-4'>
                <div className='col-span-3'>
                  <Label htmlFor='name' className='sr-only'>
                    Name
                  </Label>
                  <Input id='name' placeholder='Product name' />
                </div>
                <div className='col-span-1'>
                  <Label htmlFor='qty' className='sr-only'>
                    Qty
                  </Label>
                  <Input id='qty' placeholder='Qty' />
                </div>
                <Button className='col-span-4'>Add</Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <section className='my-2'>
        <DataTable columns={columns} data={DATA_TABLE} />
      </section>
    </main>
  );
};

export default Home;
