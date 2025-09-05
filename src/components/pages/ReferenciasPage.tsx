import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const phoneticAlphabet = [
  { letter: "A", word: "Alfa" }, { letter: "B", word: "Bravo" },
  { letter: "C", word: "Charlie" }, { letter: "D", word: "Delta" },
  { letter: "E", word: "Echo" }, { letter: "F", word: "Foxtrot" },
  { letter: "G", word: "Golf" }, { letter: "H", word: "Hotel" },
  { letter: "I", word: "India" }, { letter: "J", word: "Juliett" },
  { letter: "K", word: "Kilo" }, { letter: "L", word: "Lima" },
  { letter: "M", word: "Mike" }, { letter: "N", word: "November" },
  { letter: "O", word: "Oscar" }, { letter: "P", word: "Papa" },
  { letter: "Q", word: "Quebec" }, { letter: "R", word: "Romeo" },
  { letter: "S", word: "Sierra" }, { letter: "T", word: "Tango" },
  { letter: "U", word: "Uniform" }, { letter: "V", word: "Victor" },
  { letter: "W", word: "Whiskey" }, { letter: "X", word: "X-ray" },
  { letter: "Y", word: "Yankee" }, { letter: "Z", word: "Zulu" },
];

export default function ReferenciasPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>Tablas de Referencia Rápida</CardTitle>
                    <CardDescription>Información útil para comunicaciones y navegación.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Tabs defaultValue="alphabet" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                            <TabsTrigger value="alphabet">Alfabeto</TabsTrigger>
                            <TabsTrigger value="frequencies">Frecuencias</TabsTrigger>
                            <TabsTrigger value="qcodes">Códigos Q</TabsTrigger>
                             <TabsTrigger value="misc">Miscelánea</TabsTrigger>
                        </TabsList>
                        <TabsContent value="alphabet" className="pt-4">
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Letra</TableHead>
                                        <TableHead>Palabra Clave</TableHead>
                                        <TableHead>Letra</TableHead>
                                        <TableHead>Palabra Clave</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {Array.from({ length: Math.ceil(phoneticAlphabet.length / 2) }).map((_, i) => (
                                        <TableRow key={i}>
                                            <TableCell className="font-bold">{phoneticAlphabet[i].letter}</TableCell>
                                            <TableCell>{phoneticAlphabet[i].word}</TableCell>
                                            {phoneticAlphabet[i + 13] ? (
                                                <>
                                                    <TableCell className="font-bold">{phoneticAlphabet[i + 13].letter}</TableCell>
                                                    <TableCell>{phoneticAlphabet[i + 13].word}</TableCell>
                                                </>
                                            ) : (
                                                <>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </>
                                            )}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>
                        <TabsContent value="frequencies" className="pt-4">
                            <p className="text-muted-foreground text-center py-8">Tablas de frecuencias y canales comunes (VHF, MF/HF) se añadirán aquí.</p>
                        </TabsContent>
                         <TabsContent value="qcodes" className="pt-4">
                            <p className="text-muted-foreground text-center py-8">Una lista de los códigos Q más comunes en comunicaciones marítimas se añadirán aquí.</p>
                        </TabsContent>
                         <TabsContent value="misc" className="pt-4">
                            <p className="text-muted-foreground text-center py-8">Otras tablas útiles como la Escala de Douglas o Beaufort se añadirán aquí.</p>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
