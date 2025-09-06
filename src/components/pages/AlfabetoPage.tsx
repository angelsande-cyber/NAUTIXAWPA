import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

export default function AlfabetoPage() {
    return (
        <div className="p-4 md:p-6">
            <Card className="w-full max-w-xl mx-auto">
                <CardHeader>
                    <CardTitle>Alfabeto Fonético Internacional</CardTitle>
                    <CardDescription>Alfabeto ICAO / OTAN para comunicaciones por radio.</CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
            </Card>
        </div>
    );
}
