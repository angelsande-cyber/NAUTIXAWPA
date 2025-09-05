import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export default function SenalesPage() {
    return (
        <div className="p-8">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Señales Marítimas</CardTitle>
                     <p className="text-muted-foreground pt-2">
                        Esta sección contendrá un simulador interactivo de señales marítimas (faros, boyas, etc.).
                    </p>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center text-center h-48">
                    <Lightbulb className="h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Funcionalidad en construcción.</p>
                </CardContent>
            </Card>
        </div>
    );
}
