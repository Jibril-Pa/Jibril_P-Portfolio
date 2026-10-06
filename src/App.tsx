import { Tabs } from "@ninna-ui/navigation";

export default function Example() {
  return (
    <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Account content</Tabs.Content>
      <Tabs.Content value="tab2">Settings content</Tabs.Content>
    </Tabs>
  );
}