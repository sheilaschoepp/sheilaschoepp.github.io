require "bibtex"

module Jekyll
  module BibtexDisplay
    # Scholar serializes names as Last, First; keep First Last in copyable citations.
    def first_last_bibtex(input)
      bibliography = BibTeX.parse(input.to_s, parse_names: false, parse_months: false)
      bibliography.entries.each_value do |entry|
        next unless entry[:author]

        names = BibTeX::Names.parse(entry[:author].to_s)
        next unless names

        entry[:author] = names.map do |name|
          # Suffixes such as Jr. require BibTeX's comma-separated form.
          citation_name = name.sort_order.gsub("{}", "")
          next citation_name if name.suffix

          display_name = name.display_order.gsub("{}", "")
          parsed_names = BibTeX::Names.parse(display_name)
          original_parts = name.to_hash.transform_values { |part| part&.gsub("{}", "") }

          # Preserve compound surnames when First Last would change their meaning.
          if parsed_names&.length == 1 && parsed_names.first.to_hash == original_parts
            display_name
          else
            citation_name
          end
        end.join(" and\n          ")
      end
      bibliography.to_s
    end
  end
end

Liquid::Template.register_filter(Jekyll::BibtexDisplay)
