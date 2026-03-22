"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Section = "novosti" | "prodavnica" | "porudzbine" | "poruke";

type Product = {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  description: string;
  images: string[];
};

const initialProducts: Product[] = [
  { id: 1, name: "Monastirski med", sku: "MED-001", category: "Мед", price: "1.200 дин", stock: 24, description: "Чист манасијски мед из пчелиња са планине Белице.", images: [] },
  { id: 2, name: "Акацијин мед", sku: "MED-002", category: "Мед", price: "1.400 дин", stock: 18, description: "Светли акацијин мед благог укуса.", images: [] },
  { id: 3, name: "Восак и прополис", sku: "MED-003", category: "Мед", price: "800 дин", stock: 3, description: "Природни восак и прополис из манасијских кошница.", images: [] },
  { id: 4, name: "Икона Свете Тројице", sku: "IKO-001", category: "Иконе", price: "3.500 дин", stock: 7, description: "Ручно рађена икона Свете Тројице на дрвеној подлози.", images: [] },
  { id: 5, name: "Икона Богородице", sku: "IKO-002", category: "Иконе", price: "3.200 дин", stock: 5, description: "Икона Богородице са Христом, позлаћена.", images: [] },
  { id: 6, name: "Дрвени крст — мали", sku: "KRS-001", category: "Крстови", price: "600 дин", stock: 30, description: "Мали дрвени крст од ораховине.", images: [] },
  { id: 7, name: "Дрвени крст — велики", sku: "KRS-002", category: "Крстови", price: "1.100 дин", stock: 12, description: "Велики дрвени крст са урезаним орнаментима.", images: [] },
  { id: 8, name: "Фигура Арханђела Михаила", sku: "FIG-001", category: "Фигуре", price: "2.400 дин", stock: 2, description: "Гипсана фигура Арханђела Михаила, ручно ослликана.", images: [] },
  { id: 9, name: "Монастирске свеће", sku: "SVE-001", category: "Свеће", price: "350 дин", stock: 50, description: "Восковне свеће ручне израде из манасијске радионице.", images: [] },
  { id: 10, name: "Историја Манасије", sku: "KNJ-001", category: "Књиге", price: "1.600 дин", stock: 9, description: "Монографија о историји и архитектури Манасије.", images: [] },
  { id: 11, name: "Икона Светог Саве", sku: "IKO-003", category: "Иконе", price: "2.900 дин", stock: 4, description: "Ручно рађена икона Светог Саве Српског.", images: [] },
  { id: 12, name: "Икона Светог Николе", sku: "IKO-004", category: "Иконе", price: "3.100 дин", stock: 6, description: "Позлаћена икона Светог Николе Чудотворца.", images: [] },
  { id: 13, name: "Икона Светог Ђорђа", sku: "IKO-005", category: "Иконе", price: "2.800 дин", stock: 0, description: "Икона Светог Ђорђа на коњу, ручна израда.", images: [] },
  { id: 14, name: "Прополис тинктура", sku: "MED-004", category: "Мед", price: "950 дин", stock: 11, description: "Природна тинктура прополиса 30ml.", images: [] },
  { id: 15, name: "Цветни мед", sku: "MED-005", category: "Мед", price: "1.100 дин", stock: 20, description: "Мед од мешаног цвећа са манасијских ливада.", images: [] },
  { id: 16, name: "Крстача свећа", sku: "SVE-002", category: "Свеће", price: "420 дин", stock: 35, description: "Велика восковна крстача свећа.", images: [] },
  { id: 17, name: "Свећа са иконом", sku: "SVE-003", category: "Свеће", price: "280 дин", stock: 1, description: "Декоративна свећа са отиском иконе.", images: [] },
  { id: 18, name: "Дрвени крст — са иконом", sku: "KRS-003", category: "Крстови", price: "1.400 дин", stock: 8, description: "Дрвени крст са уграђеном иконом у центру.", images: [] },
  { id: 19, name: "Крст од бронзе", sku: "KRS-004", category: "Крстови", price: "2.200 дин", stock: 0, description: "Бронзани крст са рељефом Распећа.", images: [] },
  { id: 20, name: "Фигура Богородице", sku: "FIG-002", category: "Фигуре", price: "2.600 дин", stock: 3, description: "Гипсана фигура Богородице са Христом.", images: [] },
  { id: 21, name: "Фигура Светог Николе", sku: "FIG-003", category: "Фигуре", price: "2.100 дин", stock: 5, description: "Ручно ослликана фигура Светог Николе.", images: [] },
  { id: 22, name: "Животи светитеља", sku: "KNJ-002", category: "Књиге", price: "2.200 дин", stock: 14, description: "Збирка житија православних светитеља.", images: [] },
  { id: 23, name: "Молитвеник", sku: "KNJ-003", category: "Књиге", price: "900 дин", stock: 22, description: "Свакодневни православни молитвеник.", images: [] },
  { id: 24, name: "Псалтир", sku: "KNJ-004", category: "Књиге", price: "1.200 дин", stock: 16, description: "Псалтир на савременом српском.", images: [] },
  { id: 25, name: "Разгледница Манасија", sku: "OST-001", category: "Остало", price: "120 дин", stock: 100, description: "Разгледница са фотографијом Манасије.", images: [] },
  { id: 26, name: "Магнет — Манасија", sku: "OST-002", category: "Остало", price: "200 дин", stock: 60, description: "Декоративни магнет са мотивом Манасије.", images: [] },
  { id: 27, name: "Тканица са везом", sku: "OST-003", category: "Остало", price: "650 дин", stock: 2, description: "Ручно везена тканица са православним мотивом.", images: [] },
  { id: 28, name: "Кађионица — мала", sku: "OST-004", category: "Остало", price: "1.800 дин", stock: 7, description: "Мала метална кађионица за домаћу употребу.", images: [] },
  { id: 29, name: "Тамјан — пакет 100г", sku: "OST-005", category: "Остало", price: "400 дин", stock: 40, description: "Природни тамјан грчке производње.", images: [] },
  { id: 30, name: "Бројаница", sku: "OST-006", category: "Остало", price: "300 дин", stock: 0, description: "Ручно плетена вунена бројаница.", images: [] },
];

const emptyForm: Omit<Product, "id"> = { name: "", sku: "", category: "", price: "", stock: 0, description: "", images: [] };

// ─────────────────────────────────────────────────────────────
// NOVOSTI
// ─────────────────────────────────────────────────────────────
type ArticleStatus = "Објављено" | "Нацрт";

type Article = {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  images: string[];
  status: ArticleStatus;
};

const initialArticleCategories = ["Вести", "Догађаји", "Историја", "Промоције"];

const initialArticles: Article[] = [
  { id: 1, title: "Литија за Свете Петра и Павла", category: "Догађаји", date: "2026-07-12", excerpt: "Свечана литија одржана је у порти Манасије уз присуство великог броја верника из целе Србије.", content: "", images: [], status: "Објављено" },
  { id: 2, title: "Монашко братство прославило крсну славу", category: "Вести", date: "2026-06-05", excerpt: "Братство Манасије обележило је крсну славу уз свечана богослужења и трпезу за поклонике.", content: "", images: [], status: "Објављено" },
  { id: 3, title: "Нова изложба фресака у галерији", category: "Догађаји", date: "2026-05-20", excerpt: "Отворена је нова изложба репродукција средњовековних фресака Манасије у малој галерији.", content: "", images: [], status: "Објављено" },
  { id: 4, title: "Историја тврђаве Манасије", category: "Историја", date: "2026-04-15", excerpt: "Archaeological research reveals new details about the construction of Manasija's fortress walls.", content: "", images: [], status: "Објављено" },
  { id: 5, title: "Донације за обнову цркве", category: "Вести", date: "2026-03-10", excerpt: "Захваљујући донаторима из земље и дијаспоре, обнова северног брода цркве је завршена.", content: "", images: [], status: "Објављено" },
  { id: 6, title: "Духовна академија одржана у Манасији", category: "Догађаји", date: "2026-02-28", excerpt: "Вишедневна духовна академија са предавачима из целе Православне цркве привукла је стотину учесника.", content: "", images: [], status: "Нацрт" },
  { id: 7, title: "Нови мед из пчелиња Манасије", category: "Промоције", date: "2026-02-14", excerpt: "Ове сезоне пчелиња Манасије произвела је рекордну количину акацијиног и цветног меда.", content: "", images: [], status: "Објављено" },
  { id: 8, title: "Летња духовна обнова 2026", category: "Догађаји", date: "2026-01-30", excerpt: "Пријаве за летски програм духовне обнове отворене су за вернике свих узраста.", content: "", images: [], status: "Нацрт" },
  { id: 9, title: "Архив старих рукописа дигитализован", category: "Историја", date: "2025-12-18", excerpt: "У сарадњи са Народном библиотеком Србије, рукописна збирка Манасије је потпуно дигитализована.", content: "", images: [], status: "Објављено" },
  { id: 10, title: "Поклоничко путовање из Крагујевца", category: "Вести", date: "2025-12-05", excerpt: "Организовано поклоничко путовање из Крагујевца окупило је 200 верника на литургији у Манасији.", content: "", images: [], status: "Објављено" },
  { id: 11, title: "Нови иконостас у капели", category: "Вести", date: "2025-11-22", excerpt: "Освећен је нови иконостас у Капели Свете Петке, дар иконописца Николе Миловановића.", content: "", images: [], status: "Објављено" },
  { id: 12, title: "Школа иконописа — упис отворен", category: "Промоције", date: "2025-11-10", excerpt: "Манасија отвара нови циклус школе иконописа за почетнике и напредне полазнике.", content: "", images: [], status: "Нацрт" },
];

const emptyArticleForm: Omit<Article, "id"> = {
  title: "", category: "", date: "", excerpt: "", content: "", images: [], status: "Нацрт",
};

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("sr-Latn", { day: "numeric", month: "long", year: "numeric" });
}

function ToolbarBtn({ active, onClick, children }: { active?: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      className={`cursor-pointer px-2 py-1 rounded text-sm font-medium transition-colors ${
        active
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function RichTextEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: value,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[420px] focus:outline-none px-3 py-2",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  // Sync external value changes (e.g. when dialog opens with existing content)
  useEffect(() => {
    if (!editor) return;
    const currentHTML = editor.getHTML();
    if (value !== currentHTML) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="flex flex-col flex-1 rounded-md border overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 border-b px-2 py-1.5 bg-muted/30 flex-wrap">
        <ToolbarBtn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          <strong>B</strong>
        </ToolbarBtn>
        <ToolbarBtn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <em>I</em>
        </ToolbarBtn>
        <ToolbarBtn active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <s>S</s>
        </ToolbarBtn>
        <div className="w-px h-4 bg-border mx-1" />
        <ToolbarBtn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </ToolbarBtn>
        <ToolbarBtn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </ToolbarBtn>
        <div className="w-px h-4 bg-border mx-1" />
        <ToolbarBtn active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          •••
        </ToolbarBtn>
        <ToolbarBtn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          1.
        </ToolbarBtn>
        <div className="w-px h-4 bg-border mx-1" />
        <ToolbarBtn active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          “”
        </ToolbarBtn>
        <ToolbarBtn active={false} onClick={() => editor.chain().focus().setHardBreak().run()}>
          ⏎
        </ToolbarBtn>
      </div>
      {/* Editor area */}
      <div className="flex-1 overflow-y-auto">
        <EditorContent editor={editor} className="h-full" />
      </div>
    </div>
  );
}

function ArticleFormFields({ form, setForm, categories }: {
  form: Omit<Article, "id">;
  setForm: (updater: Omit<Article, "id"> | ((f: Omit<Article, "id">) => Omit<Article, "id">)) => void;
  categories: string[];
}) {
  return (
    <div className="flex gap-6 py-2 min-h-[520px]">

      {/* Left column — metadata */}
      <div className="w-96 shrink-0 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Слике</Label>
          <ImageGallery
            images={form.images}
            onAdd={(urls) => setForm((f) => ({ ...f, images: [...f.images, ...urls] }))}
            onRemove={(i) => setForm((f) => ({ ...f, images: f.images.filter((_, idx) => idx !== i) }))}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Наслов</Label>
          <Input
            placeholder="нпр. Литија за Свете Петра и Павла"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Категорија</Label>
          <Select value={form.category} onValueChange={(v) => setForm((f) => ({ ...f, category: v ?? "" }))}>
            <SelectTrigger><SelectValue placeholder="Изабери..." /></SelectTrigger>
            <SelectContent>
              {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Датум</Label>
          <Input
            type="date"
            value={form.date}
            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Статус</Label>
          <Select value={form.status} onValueChange={(v) => setForm((f) => ({ ...f, status: (v ?? "Нацрт") as ArticleStatus }))}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Објављено">Објављено</SelectItem>
              <SelectItem value="Нацрт">Нацрт</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Кратак опис</Label>
          <Textarea
            placeholder="Сажетак чланка..."
            rows={3}
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-border shrink-0" />

      {/* Right column — content */}
      <div className="flex-1 flex flex-col gap-1.5">
        <Label>Садржај</Label>
        <RichTextEditor
          value={form.content}
          onChange={(html) => setForm((f) => ({ ...f, content: html }))}
        />
      </div>

    </div>
  );
}

function NovostiSection({ search }: { search: string }) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [artCategories, setArtCategories] = useState<string[]>(initialArticleCategories);

  const [addOpen, setAddOpen] = useState(false);
  const [addForm, setAddForm] = useState<Omit<Article, "id">>(emptyArticleForm);

  const [editArticle, setEditArticle] = useState<Article | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [catOpen, setCatOpen] = useState(false);
  const [newCat, setNewCat] = useState("");

  const CARD_H = 90;
  const CHROME = 200;
  const [perPage, setPerPage] = useState(8);
  const [page, setPage] = useState(1);

  useEffect(() => {
    function calc() {
      setPerPage(Math.max(4, Math.floor((window.innerHeight - CHROME) / CARD_H)));
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const q = search.trim().toLowerCase();
  const filteredArticles = q
    ? articles.filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      )
    : articles;

  const totalPages = Math.ceil(filteredArticles.length / perPage);
  const paginated = filteredArticles.slice((page - 1) * perPage, page * perPage);

  function handleAdd() {
    if (!addForm.title || !addForm.category) return;
    setArticles((prev) => [...prev, { id: Date.now(), ...addForm }]);
    setAddForm(emptyArticleForm);
    setAddOpen(false);
  }

  function handleSaveEdit() {
    if (!editArticle) return;
    setArticles((prev) => prev.map((a) => (a.id === editArticle.id ? editArticle : a)));
    setEditOpen(false);
  }

  function handleDelete(id: number) {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    setDeleteId(null);
  }

  function handleAddCategory() {
    const t = newCat.trim();
    if (!t || artCategories.includes(t)) return;
    setArtCategories((prev) => [...prev, t]);
    setNewCat("");
  }

  return (
    <div className="h-full flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{filteredArticles.length} чланака{q && " (претрага)"}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button size="sm" variant="outline" onClick={() => setCatOpen(true)}>Категорије</Button>
          <Button size="sm" onClick={() => setAddOpen(true)}>+ Нови чланак</Button>
        </div>
      </div>

      {/* Article card list */}
      <div className="flex-1 min-h-0 overflow-auto">
        <div className="flex flex-col border rounded-lg overflow-hidden divide-y">
        {paginated.map((article) => (
          <div
            key={article.id}
            className="flex items-start gap-4 px-4 py-3 hover:bg-muted/40 transition-colors cursor-pointer group"
            onClick={() => { setEditArticle({ ...article }); setEditOpen(true); }}
          >
            {/* Thumbnail */}
            <div className="w-16 h-16 rounded-md overflow-hidden shrink-0 bg-muted mt-0.5">
              {article.images?.[0]
                ? <img src={article.images[0]} alt="" className="w-full h-full object-cover" />
                : <div className="w-full h-full bg-muted" />}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm truncate">{article.title}</span>
                <Badge
                  variant={article.status === "Објављено" ? "default" : "secondary"}
                  className="shrink-0 text-[10px] px-1.5 py-0"
                >
                  {article.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1 mb-1.5">{article.excerpt}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] px-1.5 py-0">{article.category}</Badge>
                <span className="text-[11px] text-muted-foreground">{formatDate(article.date)}</span>
              </div>
            </div>

            {/* Actions */}
            <div
              className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => setDeleteId(article.id)}
              >
                Обриши
              </Button>
            </div>
          </div>
        ))}

        {articles.length === 0 && (
          <div className="px-4 py-12 text-center text-sm text-muted-foreground">Нема чланака.</div>
        )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href="#"
                  onClick={(e) => { e.preventDefault(); setPage(n); }}
                  isActive={n === page}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}

      {/* ── Add dialog ── */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-[75vw] w-[75vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Нови чланак</DialogTitle></DialogHeader>
          <ArticleFormFields form={addForm} setForm={setAddForm} categories={artCategories} />
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)}>Откажи</Button>
            <Button onClick={handleAdd}>Додај</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Edit dialog ── */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-[75vw] w-[75vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Уреди чланак</DialogTitle></DialogHeader>
          {editArticle && (
            <ArticleFormFields
              form={editArticle}
              categories={artCategories}
              setForm={(updater) => {
                setEditArticle((prev) => {
                  if (!prev) return prev;
                  const next = typeof updater === "function" ? updater(prev) : updater;
                  return { ...prev, ...next, id: prev.id };
                });
              }}
            />
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)}>Затвори</Button>
            <Button onClick={handleSaveEdit}>Сачувај</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Categories dialog ── */}
      <Dialog open={catOpen} onOpenChange={setCatOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader><DialogTitle>Категорије</DialogTitle></DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-wrap gap-2">
              {artCategories.map((cat) => (
                <div key={cat} className="flex items-center gap-1 bg-secondary rounded-md px-2.5 py-1">
                  <span className="text-sm">{cat}</span>
                  <button
                    type="button"
                    onClick={() => setArtCategories((prev) => prev.filter((c) => c !== cat))}
                    className="cursor-pointer text-muted-foreground hover:text-destructive text-xs leading-none ml-1"
                  >×</button>
                </div>
              ))}
              {artCategories.length === 0 && <p className="text-sm text-muted-foreground">Нема категорија.</p>}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Нова категорија..."
                value={newCat}
                onChange={(e) => setNewCat(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddCategory(); } }}
              />
              <Button type="button" onClick={handleAddCategory}>Додај</Button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCatOpen(false)}>Затвори</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete confirm dialog ── */}
      <Dialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader><DialogTitle>Обриши чланак?</DialogTitle></DialogHeader>
          <p className="text-sm text-muted-foreground">Ова акција је неповратна.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Откажи</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Обриши</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}

function ImageGallery({
  images,
  onAdd,
  onRemove,
}: {
  images: string[];
  onAdd: (urls: string[]) => void;
  onRemove: (idx: number) => void;
}) {
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const urls = files.map((f) => URL.createObjectURL(f));
    onAdd(urls);
    e.target.value = "";
  }

  const shown = Math.min(active, images.length - 1);

  return (
    <div className="flex flex-col gap-2">
      {/* Main preview */}
      <div className="w-full h-48 rounded-md bg-muted flex items-center justify-center overflow-hidden relative">
        {images.length > 0 ? (
          <img src={images[shown]} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm text-muted-foreground">Нема слика</span>
        )}
      </div>

      {/* Thumbnails row */}
      {images.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {images.map((src, i) => (
            <div key={i} className="relative group">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`cursor-pointer w-14 h-14 rounded-md overflow-hidden border-2 transition-colors ${i === shown ? "border-primary" : "border-transparent"}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
              <button
                type="button"
                onClick={() => { onRemove(i); setActive(0); }}
                className="cursor-pointer absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-white text-[10px] items-center justify-center hidden group-hover:flex leading-none"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="cursor-pointer w-14 h-14 rounded-md border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:border-muted-foreground/60 transition-colors text-xl"
          >
            +
          </button>
        </div>
      )}

      {/* Upload button when no images */}
      {images.length === 0 && (
        <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()}>
          Додај слике
        </Button>
      )}

      <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFiles} />
    </div>
  );
}

const initialCategories = Array.from(new Set(initialProducts.map((p) => p.category)));

function ProdavnicaSection({ search }: { search: string }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<string[]>(initialCategories);

  const [addOpen, setAddOpen] = useState(false);
  const [addForm, setAddForm] = useState<Omit<Product, "id">>(emptyForm);

  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [catOpen, setCatOpen] = useState(false);
  const [newCat, setNewCat] = useState("");

  function handleAddCategory() {
    const trimmed = newCat.trim();
    if (!trimmed || categories.includes(trimmed)) return;
    setCategories((prev) => [...prev, trimmed]);
    setNewCat("");
  }

  function handleDeleteCategory(cat: string) {
    setCategories((prev) => prev.filter((c) => c !== cat));
  }

  const ROW_H = 72;
  const THEAD_H = 41;
  const tableRef = useRef<HTMLDivElement>(null);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const rows = Math.max(5, Math.floor((el.clientHeight - THEAD_H) / ROW_H));
      setPerPage(rows);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const q = search.trim().toLowerCase();
  const filteredProducts = q
    ? products.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        (p.sku ?? "").toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    : products;

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginated = filteredProducts.slice((page - 1) * perPage, page * perPage);

  function handleAdd() {
    if (!addForm.name || !addForm.category || !addForm.price) return;
    setProducts((prev) => [...prev, { id: Date.now(), ...addForm }]);
    setAddForm(emptyForm);
    setAddOpen(false);
  }

  function handleSaveEdit() {
    if (!editProduct) return;
    setProducts((prev) => prev.map((p) => (p.id === editProduct.id ? editProduct : p)));
    setEditOpen(false);
  }

  function handleDelete(id: number) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setDeleteId(null);
  }

  return (
    <div className="h-full flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{filteredProducts.length} производа{q && " (претрага)"}</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setCatOpen(true)}>
            Категорије
          </Button>
          <Button size="sm" onClick={() => setAddOpen(true)}>
            + Додај производ
          </Button>
        </div>
      </div>

      {/* Table */}
      <div ref={tableRef} className="flex-1 min-h-0">
        <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-20"></TableHead>
              <TableHead>Назив</TableHead>
              <TableHead>Цена</TableHead>
              <TableHead>Залиха</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer"
                onClick={() => { setEditProduct({ ...product }); setEditOpen(true); }}
              >
                <TableCell onClick={(e) => e.stopPropagation()}>
                  {product.images?.[0]
                    ? <img src={product.images[0]} alt="" className="w-16 h-16 rounded-lg object-cover" />
                    : <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-muted-foreground/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                      </div>
                  }
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold leading-tight">{product.name}</span>
                    {product.sku && <span className="text-xs text-muted-foreground font-normal">{product.sku}</span>}
                    <Badge variant="secondary" className="w-fit mt-0.5 text-xs">{product.category}</Badge>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{product.price}</TableCell>
                <TableCell>
                  {product.stock === 0
                    ? <Badge variant="destructive">Нема</Badge>
                    : product.stock <= 3
                    ? <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">{product.stock} ком</Badge>
                    : <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{product.stock} ком</Badge>
                  }
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setDeleteId(product.id)}
                  >
                    Обриши
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href="#"
                  onClick={(e) => { e.preventDefault(); setPage(n); }}
                  isActive={n === page}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}

      {/* ── Add dialog ── */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Нови производ</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-1.5">
              <Label>Слике</Label>
              <ImageGallery
                images={addForm.images}
                onAdd={(urls) => setAddForm((f) => ({ ...f, images: [...f.images, ...urls] }))}
                onRemove={(i) => setAddForm((f) => ({ ...f, images: f.images.filter((_, idx) => idx !== i) }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Назив</Label>
              <Input
                placeholder="нпр. Monastirski med"
                value={addForm.name}
                onChange={(e) => setAddForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Шифра / SKU</Label>
              <Input
                placeholder="нпр. MED-001"
                value={addForm.sku}
                onChange={(e) => setAddForm((f) => ({ ...f, sku: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label>Категорија</Label>
                <Select
                  value={addForm.category}
                  onValueChange={(val) => setAddForm((f) => ({ ...f, category: val ?? "" }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Изабери..." />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Цена</Label>
                <Input
                  placeholder="нпр. 1.200 дин"
                  value={addForm.price}
                  onChange={(e) => setAddForm((f) => ({ ...f, price: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Количина</Label>
                <Input
                  type="number"
                  min={0}
                  placeholder="0"
                  value={addForm.stock}
                  onChange={(e) => setAddForm((f) => ({ ...f, stock: parseInt(e.target.value) || 0 }))}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Опис</Label>
              <Textarea
                placeholder="Кратак опис производа..."
                rows={3}
                value={addForm.description}
                onChange={(e) => setAddForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)}>Откажи</Button>
            <Button onClick={handleAdd}>Додај</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Edit dialog ── */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Уреди производ</DialogTitle>
          </DialogHeader>
          {editProduct && (
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-col gap-1.5">
                <Label>Слике</Label>
                <ImageGallery
                  images={editProduct.images}
                  onAdd={(urls) => setEditProduct((p) => p && ({ ...p, images: [...p.images, ...urls] }))}
                  onRemove={(i) => setEditProduct((p) => p && ({ ...p, images: p.images.filter((_, idx) => idx !== i) }))}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Назив</Label>
                <Input
                  value={editProduct.name}
                  onChange={(e) => setEditProduct((p) => p && ({ ...p, name: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Шифра / SKU</Label>
                <Input
                  value={editProduct.sku}
                  onChange={(e) => setEditProduct((p) => p && ({ ...p, sku: e.target.value }))}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label>Категорија</Label>
                  <Select
                    value={editProduct.category}
                    onValueChange={(val) => setEditProduct((p) => p && ({ ...p, category: val ?? "" }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Изабери..." />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Цена</Label>
                  <Input
                    value={editProduct.price}
                    onChange={(e) => setEditProduct((p) => p && ({ ...p, price: e.target.value }))}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label>Количина</Label>
                  <Input
                    type="number"
                    min={0}
                    value={editProduct.stock}
                    onChange={(e) => setEditProduct((p) => p && ({ ...p, stock: parseInt(e.target.value) || 0 }))}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Опис</Label>
                <Textarea
                  rows={3}
                  value={editProduct.description}
                  onChange={(e) => setEditProduct((p) => p && ({ ...p, description: e.target.value }))}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)}>Затвори</Button>
            <Button onClick={handleSaveEdit}>Сачувај</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Categories dialog ── */}
      <Dialog open={catOpen} onOpenChange={setCatOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Категорије</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            {/* Existing categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center gap-1 bg-secondary rounded-md px-2.5 py-1">
                  <span className="text-sm">{cat}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteCategory(cat)}
                    className="cursor-pointer text-muted-foreground hover:text-destructive text-xs leading-none ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
              {categories.length === 0 && (
                <p className="text-sm text-muted-foreground">Нема категорија.</p>
              )}
            </div>
            {/* Add new */}
            <div className="flex gap-2">
              <Input
                placeholder="Нова категорија..."
                value={newCat}
                onChange={(e) => setNewCat(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddCategory(); } }}
              />
              <Button type="button" onClick={handleAddCategory}>Додај</Button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCatOpen(false)}>Затвори</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete confirm dialog ── */}
      <Dialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Обриши производ?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">Ова акција је неповратна.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Откажи</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>
              Обриши
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PORUDŽBINE
// ─────────────────────────────────────────────────────────────
type OrderStatus = "Нова" | "Послато" | "Завршено" | "Отказано";

type OrderItem = { name: string; qty: number; price: string; };

type Order = {
  id: string;
  customer: string;
  phone: string;
  address: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  total: string;
};

const initialOrders: Order[] = [
  { id: "ORD-001", customer: "Марко Петровић", phone: "060 123 4567", address: "Крагујевац, Трг Републике 12", date: "2026-03-15", status: "Нова", total: "4.700 дин", items: [{ name: "Икона Свете Тројице", qty: 1, price: "3.500 дин" }, { name: "Монастирски мед", qty: 1, price: "1.200 дин" }] },
  { id: "ORD-002", customer: "Јелена Стојановић", phone: "065 987 6543", address: "Београд, Нови Београд 45", date: "2026-03-14", status: "Нова", total: "6.400 дин", items: [{ name: "Икона Богородице", qty: 2, price: "3.200 дин" }] },
  { id: "ORD-003", customer: "Никола Ђорђевић", phone: "069 555 1234", address: "Ниш, Вождовачка 7", date: "2026-03-14", status: "Послато", total: "2.100 дин", items: [{ name: "Дрвени крст — велики", qty: 1, price: "1.100 дин" }, { name: "Монастирске свеће", qty: 2, price: "350 дин" }, { name: "Разгледница Манасија", qty: 3, price: "120 дин" }] },
  { id: "ORD-004", customer: "Ана Милуновић", phone: "063 741 8520", address: "Крагујевац, Драгана 21", date: "2026-03-13", status: "Завршено", total: "5.800 дин", items: [{ name: "Икона Светог Саве", qty: 1, price: "2.900 дин" }, { name: "Историја Манасије", qty: 1, price: "1.600 дин" }, { name: "Акацијин мед", qty: 1, price: "1.400 дин" }] },
  { id: "ORD-005", customer: "Милан Трифуновић", phone: "061 369 2580", address: "Суботица, Царевића 3", date: "2026-03-12", status: "Нова", total: "3.900 дин", items: [{ name: "Фигура Богородице", qty: 1, price: "2.600 дин" }, { name: "Тамјан — пакет 100г", qty: 1, price: "400 дин" }, { name: "Бројаница", qty: 3, price: "300 дин" }] },
  { id: "ORD-006", customer: "Весна Илић", phone: "064 852 9631", address: "Зрењанин, Милорада Белића 8", date: "2026-03-11", status: "Отказано", total: "1.800 дин", items: [{ name: "Кађионица — мала", qty: 1, price: "1.800 дин" }] },
  { id: "ORD-007", customer: "Драган Цветковић", phone: "066 147 2583", address: "Чачак, Брезовачка 16", date: "2026-03-10", status: "Завршено", total: "9.200 дин", items: [{ name: "Икона Светог Николе", qty: 1, price: "3.100 дин" }, { name: "Икона Богородице", qty: 1, price: "3.200 дин" }, { name: "Цветни мед", qty: 1, price: "1.100 дин" }, { name: "Молитвеник", qty: 2, price: "900 дин" }] },
  { id: "ORD-008", customer: "Соња Радојичић", phone: "062 963 8520", address: "Ужице, Шумадијска 5", date: "2026-03-09", status: "Послато", total: "2.800 дин", items: [{ name: "Икона Светог Ђорђа", qty: 1, price: "2.800 дин" }] },
  { id: "ORD-009", customer: "Бојан Максимовић", phone: "063 258 1470", address: "Нови Сад, Јовановића 3", date: "2026-03-08", status: "Завршено", total: "3.300 дин", items: [{ name: "Акацијин мед", qty: 1, price: "1.400 дин" }, { name: "Монастирске свеће", qty: 3, price: "350 дин" }, { name: "Разгледница Манасија", qty: 5, price: "120 дин" }] },
  { id: "ORD-010", customer: "Светлана Јовановић", phone: "065 741 9630", address: "Пожаревац, Моравска 18", date: "2026-03-07", status: "Нова", total: "7.100 дин", items: [{ name: "Икона Христа", qty: 1, price: "4.200 дин" }, { name: "Молитвеник", qty: 2, price: "900 дин" }, { name: "Бројаница", qty: 2, price: "550 дин" }] },
  { id: "ORD-011", customer: "Ненад Кузмановић", phone: "060 987 3216", address: "Лесковац, Булевар 7", date: "2026-03-06", status: "Послато", total: "5.200 дин", items: [{ name: "Икона Светог Јована", qty: 1, price: "3.400 дин" }, { name: "Тамјан — пакет 100г", qty: 2, price: "400 дин" }, { name: "Монастирски мед", qty: 1, price: "1.000 дин" }] },
  { id: "ORD-012", customer: "Татјана Симић", phone: "064 369 8520", address: "Зајечар, Тимочка 22", date: "2026-03-05", status: "Отказано", total: "2.200 дин", items: [{ name: "Дрвени крст — мали", qty: 2, price: "650 дин" }, { name: "Разгледница Манасија", qty: 7, price: "120 дин" }] },
  { id: "ORD-013", customer: "Владимир Николић", phone: "062 147 8563", address: "Шабац, Карађорђева 9", date: "2026-03-04", status: "Завршено", total: "8.500 дин", items: [{ name: "Икона Богородице", qty: 1, price: "3.200 дин" }, { name: "Фигура Светог Саве", qty: 1, price: "3.100 дин" }, { name: "Цветни мед", qty: 1, price: "1.100 дин" }, { name: "Тамјан — пакет 100г", qty: 2, price: "400 дин" }] },
  { id: "ORD-014", customer: "Ивана Петровић", phone: "066 852 4170", address: "Панчево, Змај Јовина 4", date: "2026-03-03", status: "Нова", total: "1.400 дин", items: [{ name: "Монастирске свеће", qty: 2, price: "350 дин" }, { name: "Бројаница", qty: 2, price: "350 дин" }] },
  { id: "ORD-015", customer: "Александар Ђукић", phone: "063 963 7410", address: "Смедерево, Дунавска 33", date: "2026-03-02", status: "Послато", total: "4.300 дин", items: [{ name: "Икона Светог Николе", qty: 1, price: "3.100 дин" }, { name: "Разгледница Манасија", qty: 10, price: "120 дин" }] },
  { id: "ORD-016", customer: "Гордана Миловановић", phone: "065 258 7410", address: "Врање, Партизанска 11", date: "2026-03-01", status: "Завршено", total: "6.600 дин", items: [{ name: "Кађионица — велика", qty: 1, price: "2.800 дин" }, { name: "Тамјан — пакет 250г", qty: 2, price: "750 дин" }, { name: "Монастирски мед", qty: 2, price: "1.150 дин" }] },
  { id: "ORD-017", customer: "Предраг Вуковић", phone: "060 741 2580", address: "Кикинда, Светосавска 6", date: "2026-02-28", status: "Завршено", total: "3.600 дин", items: [{ name: "Молитвеник", qty: 2, price: "900 дин" }, { name: "Бројаница", qty: 4, price: "450 дин" }] },
  { id: "ORD-018", customer: "Слободан Ристић", phone: "064 147 9630", address: "Пирот, Цариградска 14", date: "2026-02-27", status: "Нова", total: "2.600 дин", items: [{ name: "Фигура Богородице", qty: 1, price: "2.600 дин" }] },
  { id: "ORD-019", customer: "Радмила Здравковић", phone: "062 369 8520", address: "Врбас, Краља Петра 8", date: "2026-02-26", status: "Послато", total: "5.700 дин", items: [{ name: "Икона Светог Саве", qty: 1, price: "2.900 дин" }, { name: "Историја Манасије", qty: 1, price: "1.600 дин" }, { name: "Монастирске свеће", qty: 3, price: "400 дин" }] },
  { id: "ORD-020", customer: "Миодраг Станковић", phone: "066 963 1470", address: "Сомбор, Краља Томислава 5", date: "2026-02-25", status: "Отказано", total: "3.100 дин", items: [{ name: "Икона Светог Ђорђа", qty: 1, price: "2.800 дин" }, { name: "Разгледница Манасија", qty: 2, price: "120 дин" }] },
  { id: "ORD-021", customer: "Биљана Арсић", phone: "063 852 4170", address: "Бор, Хајдук Вељкова 19", date: "2026-02-24", status: "Завршено", total: "7.800 дин", items: [{ name: "Икона Христа", qty: 1, price: "4.200 дин" }, { name: "Акацијин мед", qty: 2, price: "1.400 дин" }, { name: "Тамјан — пакет 100г", qty: 2, price: "400 дин" }] },
  { id: "ORD-022", customer: "Душан Живановић", phone: "065 369 1480", address: "Јагодина, Милоша Великог 27", date: "2026-02-23", status: "Нова", total: "3.500 дин", items: [{ name: "Икона Свете Тројице", qty: 1, price: "3.500 дин" }] },
  { id: "ORD-023", customer: "Наташа Поповић", phone: "060 258 7410", address: "Сремска Митровица, Стражиловска 2", date: "2026-02-22", status: "Послато", total: "4.800 дин", items: [{ name: "Фигура Светог Саве", qty: 1, price: "3.100 дин" }, { name: "Монастирски мед", qty: 1, price: "1.200 дин" }, { name: "Бројаница", qty: 1, price: "500 дин" }] },
  { id: "ORD-024", customer: "Зоран Лазић", phone: "064 741 3690", address: "Вршац, Краља Александра 10", date: "2026-02-20", status: "Завршено", total: "6.200 дин", items: [{ name: "Кађионица — мала", qty: 1, price: "1.800 дин" }, { name: "Тамјан — пакет 250г", qty: 3, price: "750 дин" }, { name: "Монастирске свеће", qty: 4, price: "350 дин" }] },
  { id: "ORD-025", customer: "Оливера Маринковић", phone: "062 147 5806", address: "Параћин, Кнеза Милоша 3", date: "2026-02-18", status: "Завршено", total: "5.100 дин", items: [{ name: "Икона Богородице", qty: 1, price: "3.200 дин" }, { name: "Цветни мед", qty: 1, price: "1.100 дин" }, { name: "Молитвеник", qty: 1, price: "900 дин" }] },
];

function formatDateSR(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

const statusColors: Record<OrderStatus, string> = {
  "Нова": "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
  "Послато": "bg-blue-100 text-blue-700 hover:bg-blue-100",
  "Завршено": "bg-green-100 text-green-700 hover:bg-green-100",
  "Отказано": "bg-red-100 text-red-700 hover:bg-red-100",
};

function PorudzbineSection({ search }: { search: string }) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selected, setSelected] = useState<Order | null>(null);

  function handleStatusChange(id: string, status: OrderStatus) {
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o));
    setSelected((prev) => prev && prev.id === id ? { ...prev, status } : prev);
  }

  const [filterStatus, setFilterStatus] = useState<OrderStatus | "Све">("Све");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");
  const [page, setPage] = useState(1);

  const ROW_H = 57;
  const THEAD_H = 41;
  const tableRef = useRef<HTMLDivElement>(null);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const el = tableRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const rows = Math.max(5, Math.floor((el.clientHeight - THEAD_H) / ROW_H));
      setPerPage(rows);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const counts: Record<OrderStatus, number> = {
    "Нова": orders.filter((o) => o.status === "Нова").length,
    "Послато": orders.filter((o) => o.status === "Послато").length,
    "Завршено": orders.filter((o) => o.status === "Завршено").length,
    "Отказано": orders.filter((o) => o.status === "Отказано").length,
  };

  const q = search.trim().toLowerCase();
  const displayed = orders
    .filter((o) => filterStatus === "Све" || o.status === filterStatus)
    .filter((o) => !q || o.customer.toLowerCase().includes(q) || o.id.toLowerCase().includes(q) || o.address.toLowerCase().includes(q))
    .sort((a, b) => sortDir === "desc" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date));

  const totalPages = Math.ceil(displayed.length / perPage);
  const paginated = displayed.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="h-full flex flex-col gap-6">

      {/* Headers grouped */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{orders.length} поруџбина</p>
        </div>

        {/* Status summary — clickable filter pills */}
        <div className="flex items-center gap-2 flex-wrap">
          {(["Нова", "Послато", "Завршено", "Отказано"] as OrderStatus[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilterStatus(filterStatus === s ? "Све" : s)}
              className={`cursor-pointer inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                filterStatus === s
                  ? "border-foreground bg-foreground text-background"
                  : "hover:bg-muted/60 " + statusColors[s]
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                s === "Нова" ? "bg-yellow-500" :
                s === "Послато" ? "bg-blue-500" :
                s === "Завршено" ? "bg-green-500" : "bg-red-500"
              }`} />
              {s}
              <span className="opacity-70">{counts[s]}</span>
            </button>
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-3">
        <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v as OrderStatus | "Све")}>
          <SelectTrigger className="w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Све">Сви статуси</SelectItem>
            <SelectItem value="Нова">Нова</SelectItem>
            <SelectItem value="Послато">Послато</SelectItem>
            <SelectItem value="Завршено">Завршено</SelectItem>
            <SelectItem value="Отказано">Отказано</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer gap-1.5"
          onClick={() => setSortDir((d) => d === "desc" ? "asc" : "desc")}
        >
          Датум {sortDir === "desc" ? "↓" : "↑"}
        </Button>
        {filterStatus !== "Све" && (
          <Button variant="ghost" size="sm" className="cursor-pointer text-muted-foreground" onClick={() => { setFilterStatus("Све"); setPage(1); }}>
            Уклони филтер ×
          </Button>
        )}
        <span className="ml-auto text-sm text-muted-foreground">{displayed.length} резултата</span>
      </div>
      </div>

      {/* Table */}
      <div ref={tableRef} className="flex-1 min-h-0">
        <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Број</TableHead>
              <TableHead>Купац</TableHead>
              <TableHead>Адреса</TableHead>
              <TableHead>Датум</TableHead>
              <TableHead>Износ</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="w-20"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.map((order) => (
              <TableRow
                key={order.id}
                className="cursor-pointer"
                onClick={() => setSelected(order)}
              >
                <TableCell className="font-medium text-muted-foreground text-xs">{order.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{order.customer}</span>
                    <span className="text-xs text-muted-foreground">{order.phone}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{order.address}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{formatDateSR(order.date)}</TableCell>
                <TableCell className="font-medium">{order.total}</TableCell>
                <TableCell>
                  <Badge className={statusColors[order.status]}>{order.status}</Badge>
                </TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm"
                    onClick={() => setSelected(order)}
                  >
                    Детаљи
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href="#"
                  onClick={(e) => { e.preventDefault(); setPage(n); }}
                  isActive={n === page}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}

      {/* Order detail dialog */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>Поруџбина {selected.id}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-2">
                {/* Customer info */}
                <div className="bg-muted/40 rounded-lg px-4 py-3 flex flex-col gap-1">
                  <p className="font-medium">{selected.customer}</p>
                  <p className="text-sm text-muted-foreground">{selected.phone}</p>
                  <p className="text-sm text-muted-foreground">{selected.address}</p>
                  <p className="text-xs text-muted-foreground mt-1">Датум: {formatDateSR(selected.date)}</p>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium mb-1">Поручени производи</p>
                  {selected.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm py-1.5 border-b last:border-0">
                      <span>{item.name} <span className="text-muted-foreground">× {item.qty}</span></span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-semibold pt-2">
                    <span>Укупно</span>
                    <span>{selected.total}</span>
                  </div>
                </div>

                {/* Status change */}
                <div className="flex flex-col gap-1.5">
                  <Label>Статус поруџбине</Label>
                  <Select
                    value={selected.status}
                    onValueChange={(val) => handleStatusChange(selected.id, val as OrderStatus)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Нова">Нова</SelectItem>
                      <SelectItem value="Послато">Послато</SelectItem>
                      <SelectItem value="Завршено">Завршено</SelectItem>
                      <SelectItem value="Отказано">Отказано</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSelected(null)}>Затвори</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PORUKE
// ─────────────────────────────────────────────────────────────
type Poruka = {
  id: number;
  name: string;
  email: string;
  date: string;
  subject: string;
  message: string;
  read: boolean;
};

const initialPoruke: Poruka[] = [
  { id: 1, name: "Ана Тодоровић", email: "ana.todorovic@gmail.com", date: "2026-03-16", subject: "Поподневне посете", message: "Добар дан, желела бих да знам да ли је могуће доћи у поподне недеље са групом од 20 особа из Београда? Да ли треба напред најавити посету?", read: false },
  { id: 2, name: "Стефан Милошевић", email: "stefan.milosevic@outlook.com", date: "2026-03-15", subject: "Цена слике иконе", message: "Поздрав, занима ме колико кошта икона Богородице коју сам видео на сајту. Може ли да се пошаље поштом или морам да дођем лично?", read: false },
  { id: 3, name: "Марија Павловић", email: "marija.pavlovic@yahoo.com", date: "2026-03-14", subject: "Школа иконописа", message: "Добри дан! Видела сам да отварате школу иконописа. Како могу да се пријавим? Колико траје полазни?", read: true },
  { id: 4, name: "Драган Нешић", email: "dragan.nesic@gmail.com", date: "2026-03-13", subject: "Фотографисање у манастиру", message: "Поздрав, ја сам фотограф и желео бих да направим серију фотографија манастира за свој портфолио. Да ли је то могуће?", read: true },
  { id: 5, name: "Јелена Костић", email: "jelena.kostic@gmail.com", date: "2026-03-12", subject: "Поклоничко путовање", message: "Добро јутро! Организујем поклоничко путовање за групу од 50 пензионера из Ниша у јуну. Молимо вас да нас обавестите о времену литургије.", read: false },
  { id: 6, name: "Никола Радовановић", email: "nikola.radovanovic@gmail.com", date: "2026-03-10", subject: "Питање о манастиру", message: "Здраво! Пишем рад о манастиру Манасији за локални лист. Можемо ли да дођем на кратак разговор са игуманом?", read: true },
  { id: 7, name: "Бојана Живковић", email: "bojana.zivkovic@gmail.com", date: "2026-03-09", subject: "Венчање у цркви", message: "Добар дан, желела бих да се распитам да ли је могуће обавити венчање у цркви Успења Пресвете Богородице. Можете ли ми послати информације о процедури и терминима?", read: false },
  { id: 8, name: "Горан Петровић", email: "goran.petrovic@hotmail.com", date: "2026-03-08", subject: "Куповина меда", message: "Поздрав! Чуо сам да манастир производи мед. Да ли га можете послати поштом? Занима ме да наручим 5–6 тегли.", read: false },
  { id: 9, name: "Татјана Вуковић", email: "tatjana.vukovic@gmail.com", date: "2026-03-07", subject: "Крштење детета", message: "Добар дан, желим да крстимо дете у вашој цркви. Да ли је то могуће за посетиоце или само за парохијане? Молим за упутство.", read: true },
  { id: 10, name: "Владимир Јовановић", email: "vladimir.jovanovic@gmail.com", date: "2026-03-06", subject: "Поруџбина свећа", message: "Здраво, занима ме да ли можете да пошаљете 50 венчаних свећа са иконом Манасије? Потребне су ми за јул месец.", read: false },
  { id: 11, name: "Снежана Ђорђевић", email: "snezana.djordjevic@yahoo.com", date: "2026-03-05", subject: "Радно време", message: "Добар дан! Планирамо посету следеће недеље. Да ли је могуће да нам кажете тачно радно време и да ли постоји улазница?", read: true },
  { id: 12, name: "Милан Стојановић", email: "milan.stojanovic@gmail.com", date: "2026-03-04", subject: "Парастос", message: "Поздрав Оче, желим да закажем парастос за преминулог оца. Можете ли ми рећи шта је потребно и када би то могло бити?", read: true },
  { id: 13, name: "Катарина Илић", email: "katarina.ilic@gmail.com", date: "2026-03-03", subject: "Ракија из продавнице", message: "Добро јутро! Видела сам на сајту ракију коју производи манастир. Да ли могу да је поручим онлајн или само на лицу места?", read: false },
  { id: 14, name: "Петар Симоновић", email: "petar.simonovic@gmail.com", date: "2026-03-02", subject: "Боравак у конаку", message: "Поздрав, занима ме да ли је могуће преноћити у конаку? Колика је цена и да ли треба унапред резервисати место?", read: false },
  { id: 15, name: "Ивана Лазаревић", email: "ivana.lazarevic@outlook.com", date: "2026-03-01", subject: "Фреске — студентски рад", message: "Добар дан! Студент сам уметности и пишем дипломски о фрескама Манасије. Да ли могу добити дозволу за студијску посету и фотографисање фресака?", read: true },
  { id: 16, name: "Зоран Марковић", email: "zoran.markovic@gmail.com", date: "2026-02-28", subject: "Пакет за крсну славу", message: "Здраво, желим да поручим пакет иконе и свећа за крсну славу Свети Стефан. Да ли имате такве пакете у продавници?", read: true },
  { id: 17, name: "Оливера Николић", email: "olivera.nikolic@gmail.com", date: "2026-02-26", subject: "Помен — листа имена", message: "Добар дан, желела бих да пошаљем листу имена за помен. Да ли се то може урадити и на који начин?", read: false },
  { id: 18, name: "Димитрије Тешић", email: "dimitrije.tesic@gmail.com", date: "2026-02-24", subject: "Документарни филм", message: "Поздрав, ја сам редитељ и радим на документарцу о средњовековним српским манастирима. Да ли бисте дозволили снимање?", read: true },
  { id: 19, name: "Александра Борић", email: "aleksandra.boric@yahoo.com", date: "2026-02-22", subject: "Захвалност на дочеку", message: "Хтела сам само да вам захвалим на лепом дочеку прошле недеље. Монаси су били изузетно љубазни и посета нам је оставила дубок утисак.", read: true },
  { id: 20, name: "Ненад Спасић", email: "nenad.spasic@gmail.com", date: "2026-02-20", subject: "Волонтирање", message: "Добар дан, занима ме да ли је могуће волонтирати у оквиру монашке заједнице? Желим да допринесем одржавању и чувању овог светог места.", read: false },
];

function PorukeSection({ search }: { search: string }) {
  const [poruke, setPoruke] = useState<Poruka[]>(initialPoruke);
  const [selected, setSelected] = useState<Poruka | null>(null);
  const [filter, setFilter] = useState<"sve" | "neprocitane">("sve");
  const [page, setPage] = useState(1);
  const perPage = 8;

  function openMessage(p: Poruka) {
    setSelected(p);
    setPoruke((prev) => prev.map((m) => m.id === p.id ? { ...m, read: true } : m));
  }

  function handleFilterChange(f: "sve" | "neprocitane") {
    setFilter(f);
    setPage(1);
  }

  function getInitials(name: string) {
    return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  }

  const unread = poruke.filter((p) => !p.read).length;
  const q = search.trim().toLowerCase();
  const filtered = poruke
    .filter((p) => filter === "neprocitane" ? !p.read : true)
    .filter((p) => !q || p.name.toLowerCase().includes(q) || p.subject.toLowerCase().includes(q) || p.message.toLowerCase().includes(q) || p.email.toLowerCase().includes(q));
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="h-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <p className="text-sm text-muted-foreground shrink-0">
          {filtered.length} порука{unread > 0 && ` — ${unread} непрочитаних`}
        </p>
        {/* Filter tabs */}
        <div className="flex items-center gap-1 bg-muted rounded-lg p-1 ml-auto">
          <button
            type="button"
            onClick={() => handleFilterChange("sve")}
            className={`cursor-pointer px-3 py-1.5 text-sm rounded-md transition-colors ${
              filter === "sve" ? "bg-white shadow-sm font-medium text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Све
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("neprocitane")}
            className={`cursor-pointer px-3 py-1.5 text-sm rounded-md transition-colors flex items-center gap-2 ${
              filter === "neprocitane" ? "bg-white shadow-sm font-medium text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Непрочитане
            {unread > 0 && (
              <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold bg-blue-500 text-white rounded-full">
                {unread}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 min-h-0 overflow-auto">
        <div className="border rounded-lg divide-y">
        {paginated.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => openMessage(p)}
            className={`cursor-pointer w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-muted/40 transition-colors ${
              !p.read ? "bg-blue-50/60" : ""
            }`}
          >
            {/* Initials avatar */}
            <div
              className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5 ${
                !p.read ? "bg-blue-100 text-blue-700" : "bg-muted text-muted-foreground"
              }`}
            >
              {getInitials(p.name)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`text-sm truncate ${!p.read ? "font-semibold" : "font-medium"}`}>{p.name}</span>
                  {!p.read && <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{formatDateSR(p.date)}</span>
              </div>
              <p className={`text-sm mt-0.5 truncate ${!p.read ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                {p.subject}
              </p>
              <p className="text-xs text-muted-foreground truncate mt-0.5">{p.message}</p>
            </div>
          </button>
        ))}
        {paginated.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-12">Нема непрочитаних порука</p>
        )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href="#"
                  onClick={(e) => { e.preventDefault(); setPage(n); }}
                  isActive={n === page}
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      )}

      {/* Message detail dialog */}
      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.subject}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-2">
                <div className="bg-muted/40 rounded-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-semibold shrink-0">
                    {getInitials(selected.name)}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-sm">{selected.name}</p>
                    <p className="text-sm text-muted-foreground">{selected.email}</p>
                    <p className="text-xs text-muted-foreground">{formatDateSR(selected.date)}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">{selected.message}</p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSelected(null)}>Затвори</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function AdminPage() {
  const [active, setActive] = useState<Section>("prodavnica");
  const [search, setSearch] = useState("");

  function switchSection(s: Section) {
    setActive(s);
    setSearch("");
  }

  const sectionLabel: Record<Section, string> = {
    novosti: "Новости",
    prodavnica: "Продавница",
    porudzbine: "Поруџбине",
    poruke: "Поруке",
  };

  return (
    <div className="h-screen flex bg-background">

      {/* ── Sidebar ── */}
      <aside className="w-60 flex flex-col shrink-0 bg-[#1a1a1a]">
        <div className="px-5 py-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Manasija" width={44} height={44} />
            <span className="text-sm font-semibold leading-tight text-white">Манастир<br />Манасија</span>
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4">
          <p className="px-3 mb-2 text-[10px] font-semibold tracking-widest text-white/40 uppercase">
            Садржај
          </p>
          <ul className="flex flex-col gap-0.5">
            <li>
              <button
                onClick={() => switchSection("novosti")}
                className={`cursor-pointer w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === "novosti"
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/8 hover:text-white"
                }`}
              >
                Новости
              </button>
            </li>
            <li>
              <button
                onClick={() => switchSection("prodavnica")}
                className={`cursor-pointer w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === "prodavnica"
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/8 hover:text-white"
                }`}
              >
                Продавница
              </button>
            </li>
            <li>
              <button
                onClick={() => switchSection("porudzbine")}
                className={`cursor-pointer w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === "porudzbine"
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/8 hover:text-white"
                }`}
              >
                Поруџбине
              </button>
            </li>
            <li>
              <button
                onClick={() => switchSection("poruke")}
                className={`cursor-pointer w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === "poruke"
                    ? "bg-white/10 text-white"
                    : "text-white/50 hover:bg-white/8 hover:text-white"
                }`}
              >
                Поруке
              </button>
            </li>
          </ul>
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <Button variant="ghost" className="w-full justify-start text-white/40 hover:text-white hover:bg-white/8 text-sm">
            Одјави се
          </Button>
        </div>
      </aside>

      {/* ── Content ── */}
      <div className="flex-1 flex flex-col">
        {/* Universal top bar */}
        <div className="flex items-center gap-4 px-8 py-4 border-b">
          <h1 className="text-base font-semibold shrink-0">{sectionLabel[active]}</h1>
          <div className="relative flex-1 max-w-sm">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <Input
              placeholder="Претражи..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-9"
            />
          </div>
        </div>
        <main className="flex-1 overflow-hidden p-8">
          {active === "prodavnica" && <ProdavnicaSection search={search} />}
          {active === "novosti" && <NovostiSection search={search} />}
          {active === "porudzbine" && <PorudzbineSection search={search} />}
          {active === "poruke" && <PorukeSection search={search} />}
        </main>
      </div>

    </div>
  );
}
