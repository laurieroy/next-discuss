import { Button, Input, Popover, PopoverTrigger, Textarea } from "@nextui-org/react";
import * as actions from "@/actions";

export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <form action={actions.topicCreate}>
        <div className="flex flex-col gap-4 p-4 w-80">
          <h3 className="text-lg">Create a Topic</h3>
          <Input
            name="name"
            label="Name"
            labelPlacement="outside"
            placeholder="Name"
          />
          <Textarea
            name="description"
            label="Description"
            labelPlacement="outside"
            placeholder="Describe your topic"
          />

          <Button type="submit">Create</Button>
        </div>

      </form>
    </Popover>
  );
}
