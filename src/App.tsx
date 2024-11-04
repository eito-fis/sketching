import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const CARDS: SketchCardProps[] = [
  { title: "Test Thing 1", description: "Description number 1" },
  { title: "Test Thing 2", description: "Description number 1" },
  { title: "Test Thing 3", description: "Description number 3" },
  { title: "Test Thing 4", description: "Description number 4" },
  { title: "Test Thing 5", description: "Description number 5" },
  { title: "Test Thing 6", description: "Description number 6" },
  { title: "Test Thing 7", description: "Description number 7" },
];

type SketchCardProps = {
  title: string;
  description: string;
};

function SketchCard({ title, description }: SketchCardProps) {
  return (
    <a href="#" target="_blank" rel="noopener noreferrer">
      <Card className="transition-all ease-in-out duration-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-background mx-auto w-full p-4">
      <div className="relative container p-8 flex flex-col gap-4">
        <section>
          <h1 className="text-3xl font-bold leading-tight">Sketching</h1>
          <div className="max-w-2xl text-balance text-foreground font-light">
            A collection of various things
          </div>
        </section>
        <section className="grid grid-cols-3 grid-flow-row-dense items-start justify-center rounded-lg gap-6">
          {CARDS.map((card) => (
            <SketchCard title={card.title} description={card.description} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
