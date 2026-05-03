import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="space-y-4 p-8">
      <h1 className="heading-2 gradient-text">Advanced Styling</h1>
      
      <div className="space-x-2">
        <Button>Default Button</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      
      <div className="flex gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">🔍</Button>
      </div>
      
      <Button className="w-full">Full Width Button</Button>
    </div>
  )
}