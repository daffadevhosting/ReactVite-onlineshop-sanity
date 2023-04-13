import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'produk',
  title: 'Jual Produk',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Gambar Sampul',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
            title: "Gambar Produk (min 1 / maks 5)",
            name: "images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        metadata: ["palette"],
                        hotspot: true
                    },
                    fields: [
                        {
                            title: "Alt Text",
                            name: "alt",
                            type: "string",
                            description: "Descriptsi singkat foto",
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ],
            validation: Rule => Rule.min(1).max(5)
        }),
    defineField({
      name: 'title',
      title: 'Nama Produk',
      type: 'string',
    }),
    defineField({
        title: "Harga Produk",
        name: "price",
        type: "number",
        validation: Rule => Rule.required().min(0)
    }), 
    defineField({
        title: "Pilihan Ukuran",
        name: "sizes",
        type: "array",
        of: [{ "type": "string" }],
        options: {
        layout: "tags"
        }
    }),
    defineField({
        title: "Pilihan Warna",
        name: "colors",
        type: "array",
        of: [{ "type": "string" }],
        options: {
        layout: "tags"
        }
    }),
    defineField({
      name: 'categories',
      title: 'Kategori Produk',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'body',
      title: 'Deskripsi Produk',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Terbitkan Pada',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Penjual',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'slug',
      title: 'Generate URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `penjual ${author}`}
    },
  },
})
