import { Table } from "@/components/table";
import { ArrowBigDown } from "lucide-react";

interface TableProps {
}

export default async function TablePage({}: TableProps) {
  return <>
  <div className="bg-neutral-200 p-32">
    <Table.Root>
  <Table.Header>
    <Table.Column>ID</Table.Column>
    <Table.Column>Cover</Table.Column>
    <Table.Column>Name</Table.Column>
    <Table.Column>Description</Table.Column>
    <Table.Column>State</Table.Column>
  </Table.Header>
  <Table.Body>
    {/* Repeat the following structure for each row */}
    <Table.Row>
      <Table.Cell>1</Table.Cell>
      <Table.Cell><img src="path_to_cover_image" alt="Cover" /></Table.Cell>
      <Table.Cell>Chez Léon</Table.Cell>
      <Table.Cell>Chez Léon is a human sized Parisian...</Table.Cell>
      <Table.Cell>
        <ArrowBigDown  />
      </Table.Cell>
    </Table.Row>
    {/* ... other rows */}
  </Table.Body>
</Table.Root>
  </div>
  </>;
}