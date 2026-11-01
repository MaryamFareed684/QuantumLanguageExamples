# 500 JavaScript Programs

Five hundred self-contained JavaScript programs in 25 topics of 20, from the basics to
generators, async code, metaprogramming, algorithms and puzzles. They are written as a
JavaScript programmer would write them, not in a subset chosen for Quantum, so they also
measure how much real JavaScript the compiler runs.

Every program:

- runs in Node 20 and exits cleanly,
- is deterministic (no `Math.random`, clock or input; random-looking data comes from a
  seeded generator written in the program) and prints its results,
- reads no standard input and writes no files, so `quantum --test` can run it.

```bash
node 16_graphs/03_dijkstra.js           # the reference
qrun 16_graphs/03_dijkstra.js           # Quantum
quantum --test examples                 # the whole examples tree
```

## 01_basics/ — Basics (20 programs)

- `01_hello_variables.js` — Variables, template literals and typeof on basic values.
- `02_temperature_table.js` — A Celsius to Fahrenheit and Kelvin conversion table.
- `03_grade_calculator.js` — Letter grades from numeric scores, with a class summary.
- `04_multiplication_table.js` — A multiplication table with aligned columns.
- `05_leap_years.js` — Leap years in a range, by the Gregorian rule.
- `06_fizzbuzz_variants.js` — FizzBuzz three ways: if chain, ternary and a rule table.
- `07_type_coercion.js` — The rules of == , + and truthiness, shown by example.
- `08_loops_tour.js` — Every loop form: for, while, do-while, for-in, for-of, labels.
- `09_switch_statements.js` — switch with fallthrough, default placement and strict matching.
- `10_operators.js` — Arithmetic, bitwise, logical, nullish and optional-chaining operators.
- `11_strings_numbers.js` — Converting between strings and numbers, and number formatting.
- `12_arrays_intro.js` — First steps with arrays: index, push, pop, slice and iteration.
- `13_objects_intro.js` — Object literals: properties, methods, shorthand and iteration.
- `14_functions_intro.js` — Declarations, expressions, arrows, defaults, rest and hoisting.
- `15_collatz.js` — The longest Collatz chain below a limit.
- `16_change_maker.js` — Greedy coin change, printed as a receipt.
- `17_shape_printer.js` — Triangles, diamonds and hollow boxes in text.
- `18_date_parts.js` — Day of week and day of year computed with UTC dates.
- `19_console_methods.js` — console.log formatting of values and format specifiers.
- `20_bmi_report.js` — A small report: BMI categories for a table of people.

## 02_strings/ — Strings (20 programs)

- `01_case_and_trim.js` — Case conversion, trimming and padding.
- `02_search_and_slice.js` — indexOf, includes, startsWith, slice, substring and at.
- `03_split_join.js` — split with separators, limits and regexes; join and repeat.
- `04_replace_forms.js` — replace and replaceAll with strings, regexes, groups and functions.
- `05_character_counts.js` — Letter frequencies, vowels and most common characters.
- `06_palindromes.js` — Palindrome checks with normalization, and palindromic substrings.
- `07_caesar_rot13.js` — Caesar cipher with any shift, and ROT13.
- `08_unicode_strings.js` — UTF-16 lengths, code points, and spreading strings.
- `09_template_literals.js` — Template literals: multi-line, expressions, nesting and tags.
- `10_string_compare_sort.js` — Comparing strings, sort orders and natural keys.
- `11_word_wrap.js` — Wrapping a paragraph to a width, and centering it.
- `12_acronyms_initials.js` — Acronyms, initials and word statistics.
- `13_number_formatting.js` — Thousands separators, currency, ordinals and percent strings.
- `14_anagram_groups.js` — Grouping words into anagram classes.
- `15_run_length.js` — Run-length encoding and decoding.
- `16_vowel_tools.js` — Pig Latin, vowel removal and syllable-like counting.
- `17_string_builder.js` — Building big strings and comparing ways of concatenating.
- `18_string_immutability.js` — Strings are values: indexing, immutability and wrapper objects.
- `19_hex_and_binary.js` — Hex dumps and base conversion by hand.
- `20_string_methods_misc.js` — The rest of String.prototype: match, search, localeCompare, etc.

## 03_arrays/ — Arrays (20 programs)

- `01_map_filter_reduce.js` — The core trio, separately and chained.
- `02_mutators.js` — push, pop, shift, unshift, splice, reverse, fill, copyWithin.
- `03_non_mutating.js` — slice, concat, flat, with, toSorted, toReversed, toSpliced.
- `04_search_test.js` — find, findIndex, findLast, some, every, includes, indexOf.
- `05_sorting_rules.js` — Default string sort, numeric comparators and stability.
- `06_holes_sparse.js` — Sparse arrays: holes, length and how iteration treats them.
- `07_matrix_ops.js` — Matrices as nested arrays: multiply, transpose, identity, determinant.
- `08_set_operations.js` — Unique values, unions, intersections and differences on arrays.
- `09_grouping_counting.js` — Grouping and counting with reduce and Object.groupBy-style helpers.
- `10_chunk_zip_window.js` — chunk, zip, sliding windows and rotate helpers.
- `11_spread_rest.js` — Spread, rest and array destructuring.
- `12_array_like.js` — Array-likes, arguments and Array.prototype borrowing.
- `13_iteration_helpers.js` — entries, keys, values and forEach with this.
- `14_stats.js` — Mean, median, mode, variance and percentiles.
- `15_two_pointers.js` — Two-pointer techniques: pair sum, dedupe, container with water.
- `16_prefix_sums.js` — Prefix sums, Kadane's maximum subarray and sliding window.
- `17_nested_data.js` — Walking records: sums, lookups and reshaping nested arrays.
- `18_big_arrays.js` — Larger arrays: building, sorting and summing a million-ish values.
- `19_copying.js` — Shallow vs deep copies and shared references.
- `20_array_printing.js` — How console.log prints long, nested and mixed arrays.

## 04_objects/ — Objects and destructuring (20 programs)

- `01_destructuring.js` — Object destructuring: renames, defaults, nesting, rest, parameters.
- `02_spread_merge.js` — Merging objects with spread and Object.assign.
- `03_keys_entries.js` — keys, values, entries, fromEntries and property order.
- `04_getters_setters.js` — Accessors with get, set and defineProperty.
- `05_freeze_seal.js` — freeze, seal, preventExtensions and strict-mode errors.
- `06_this_binding.js` — How this is decided: method, detached, call, apply, bind, arrow.
- `07_factory_functions.js` — Objects from factory functions with private state.
- `08_json_roundtrip.js` — JSON.stringify and parse: replacer, reviver, indentation, toJSON.
- `09_object_printing.js` — How console.log prints objects: nesting, wide objects, class names.
- `10_inventory_system.js` — An inventory: add, remove, restock and a value report.
- `11_dictionary_ops.js` — Objects as dictionaries: has, delete, default values and inversion.
- `12_deep_equal.js` — Deep equality and deep clone written by hand.
- `13_pick_omit.js` — pick, omit, get-by-path and set-by-path helpers.
- `14_prototype_lookup.js` — Own vs inherited properties and the prototype chain.
- `15_tree_of_objects.js` — Walking a nested file-tree object and summing sizes.
- `16_records_table.js` — Records to a formatted table with computed column widths.
- `17_config_defaults.js` — Layered configuration: defaults, overrides and validation.
- `18_object_statics.js` — Object.is, Object.entries order, Object.create with descriptors.
- `19_shopping_cart.js` — A shopping cart with discounts and tax.
- `20_symbol_keys.js` — Symbols as hidden keys and well-known symbols on objects.

## 05_numbers_math/ — Numbers, Math and BigInt (20 programs)

- `01_float_facts.js` — Floating-point behaviour: precision, epsilon and special values.
- `02_math_functions.js` — The Math object.
- `03_rounding_helpers.js` — Rounding to places, significant digits and to a step.
- `04_integer_division.js` — Integer division, modulo signs and 32-bit operators.
- `05_bigint_basics.js` — BigInt arithmetic, conversion and comparison.
- `06_factorial_fibonacci.js` — Factorials and Fibonacci in Number and BigInt.
- `07_compound_interest.js` — Compound interest, loan payments and savings tables.
- `08_geometry.js` — Areas, distances, polygons and circle math.
- `09_unit_conversion.js` — A table-driven unit converter.
- `10_number_methods.js` — Number statics and instance methods.
- `11_random_lcg.js` — A seeded linear congruential generator and its distribution.
- `12_prng_shuffle.js` — xorshift32 with Fisher-Yates shuffle.
- `13_monte_carlo_pi.js` — Estimating pi and an integral with seeded Monte Carlo.
- `14_numerical_methods.js` — Newton's method, bisection, Simpson's rule and Euler steps.
- `15_complex_numbers.js` — Complex arithmetic and a tiny Mandelbrot plot.
- `16_fractions.js` — Exact fractions with reduction and arithmetic.
- `17_statistics_regression.js` — Least-squares regression and correlation.
- `18_base_arithmetic.js` — Binary strings: add, multiply and popcount.
- `19_time_arith.js` — Durations and calendar math with plain numbers.
- `20_roman_numerals.js` — Roman numerals both ways, and number words.

## 06_functions_closures/ — Functions and closures (20 programs)

- `01_closures_counter.js` — Closures capture variables, not values.
- `02_hoisting_tdz.js` — var hoisting, function hoisting and the temporal dead zone.
- `03_default_params.js` — Default parameters: evaluation time, scope and undefined.
- `04_currying.js` — Currying and partial application.
- `05_compose_pipe.js` — Function composition and pipelines.
- `06_memoize.js` — Memoization by key, for pure functions.
- `07_higher_order.js` — Functions taking and returning functions: once, after, debounce-like.
- `08_function_properties.js` — Function name, length, toString, properties and new.target.
- `09_arguments_object.js` — arguments vs rest parameters; variadic helpers.
- `10_iife_module.js` — The module pattern with an IIFE and revealed API.
- `11_callbacks.js` — Callback style: passing behaviour, error-first conventions.
- `12_recursion_closures.js` — Named function expressions and closures that recurse.
- `13_generators_as_functions.js` — Generator functions used as resumable computations.
- `14_getter_lazy.js` — Lazy evaluation with thunks and self-replacing getters.
- `15_event_emitter.js` — A small event emitter built from closures.
- `16_method_chaining.js` — Fluent builders returning this.
- `17_call_apply_tricks.js` — Borrowing methods and binding partial arguments.
- `18_varargs_formatting.js` — A printf-style formatter using rest params and replace.
- `19_function_tables.js` — Dispatch tables and a tiny calculator.
- `20_scope_chain.js` — Lexical scope, shadowing, globals and globalThis.

## 07_classes/ — Classes (20 programs)

- `01_class_basics.js` — Classes: constructor, methods, fields and instanceof.
- `02_private_fields.js` — #private fields and methods, and the in check.
- `03_static_members.js` — Static methods, fields, blocks and inherited statics.
- `04_getters_setters_class.js` — Accessors in classes with validation.
- `05_tostring_valueof.js` — toString, valueOf, toJSON, Symbol.toPrimitive and inspect.
- `06_class_expressions.js` — Class expressions, computed members and generators in classes.
- `07_fields_order.js` — Field initializer order and this in initializers.
- `08_stack_queue_classes.js` — Stack and Queue classes with iterators.
- `09_vector_class.js` — A vector class with operators as methods.
- `10_bank_system.js` — Accounts, transfers and a ledger with custom errors.
- `11_linked_list_class.js` — A singly linked list class that is iterable.
- `12_state_machine_class.js` — A traffic-light state machine as a class.
- `13_comparable_sort.js` — Sorting instances with compare methods.
- `14_singleton_registry.js` — Singletons and registries using statics.
- `15_constructor_returns.js` — new semantics: returning objects, prototypes and function constructors.
- `16_duck_typing.js` — Interfaces by convention and instanceof with Symbol.hasInstance.
- `17_shapes_table.js` — A shape hierarchy printing a table of areas.
- `18_observer_class.js` — The observer pattern with a Subject class.
- `19_matrix_class.js` — A Matrix class with immutable operations and printing.
- `20_instance_introspection.js` — Inspecting instances, methods and class chains at run time.

## 08_inheritance_mixins/ — Inheritance, prototypes and mixins (20 programs)

- `01_extends_super.js` — extends, super calls and method overriding.
- `02_prototype_chain.js` — Walking prototype chains of various values.
- `03_prototype_inheritance_old.js` — Pre-class inheritance with constructor functions.
- `04_mixins.js` — Mixins with Object.assign and subclass factories.
- `05_extending_builtins.js` — Subclassing Array, Error and Map.
- `06_abstract_methods.js` — Abstract-style classes checked with new.target.
- `07_super_in_objects.js` — super in object literals, setPrototypeOf and shadowing.
- `08_method_resolution.js` — Which method runs: overrides, late binding, super chains.
- `09_composition_vs_inheritance.js` — Composition: objects built by delegating to parts.
- `10_toString_inheritance.js` — Inherited toString, inspect names and class printing.
- `11_exception_hierarchy.js` — Custom error classes in a hierarchy.
- `12_iterable_inheritance.js` — Inheriting iteration protocols.
- `13_animal_kingdom.js` — A deep hierarchy with a sound table.
- `14_interfaces_checks.js` — Checking required methods before use.
- `15_visitor_pattern.js` — Visitor pattern over an expression tree.
- `16_template_method.js` — Template-method pattern and hooks with defaults.
- `17_decorator_functions.js` — Decorating methods by wrapping prototypes.
- `18_instanceof_edges.js` — instanceof with prototypes that change, and cross checks.
- `19_multilevel_constructor.js` — Constructor order and shared defaults across levels.
- `20_plugin_tree.js` — A widget tree with bubbling events through parents.

## 09_iterators_generators/ — Iterators and generators (20 programs)

- `01_iterator_protocol.js` — Writing the iterator protocol by hand.
- `02_generator_basics.js` — Generator functions, next, return and throw.
- `03_infinite_generators.js` — Infinite sequences with take, filter and map generators.
- `04_yield_delegation.js` — yield* with arrays, generators and return values.
- `05_iterable_consumers.js` — Everything that consumes iterables.
- `06_built_in_iterators.js` — String, Array, Map and Set iterator objects.
- `07_lazy_pipeline.js` — A chainable lazy sequence class on generators.
- `08_tree_traversal_iter.js` — Iterating a binary tree with explicit stacks and generators.
- `09_zip_chain_cycle.js` — itertools-style helpers: zip, chain, cycle, enumerate, chunk.
- `10_coroutine_scheduler.js` — Round-robin coroutines built on generators.
- `11_paginated_iter.js` — Iterating paged data lazily with call counts.
- `12_entries_of_objects.js` — Making plain objects iterable and using entries.
- `13_generator_state.js` — Generators as state machines: lexer tokens and running totals.
- `14_iterator_helpers_manual.js` — A reduce/some/every family over any iterable.
- `15_range_class_step.js` — A Range class with step, reverse and contains.
- `16_flatten_nested_iter.js` — Depth-limited flatten and walking nested maps.
- `17_sliding_iter.js` — Sliding-window statistics over a stream.
- `18_reverse_iteration.js` — Reverse iteration of arrays, strings and linked items.
- `19_async_iter_sync_data.js` — Async generators and for-await over sync and async sources.
- `20_permutation_generators.js` — Combinations, permutations and power sets as generators.

## 10_errors/ — Errors and exceptions (20 programs)

- `01_try_catch_finally.js` — Control flow through try, catch and finally.
- `02_error_types.js` — The built-in error types, and what raises them.
- `03_error_object.js` — Properties of Error objects: message, name, cause, stack, toString.
- `04_throw_anything.js` — Anything can be thrown; catching by shape.
- `05_custom_errors.js` — Custom error classes with extra fields and cause chains.
- `06_retry_logic.js` — Retrying flaky operations with counters and fallback.
- `07_resource_cleanup.js` — finally for cleanup, nested resources and closing order.
- `08_input_validation.js` — Validating records and collecting all problems.
- `09_error_in_callbacks.js` — Exceptions crossing callbacks, map and getters.
- `10_uncaught_handlers.js` — process.on for uncaught errors and exit ordering.
- `11_stack_overflow.js` — Catching RangeError from runaway recursion and recovering.
- `12_result_type.js` — Result objects instead of exceptions.
- `13_finally_with_loops.js` — break, continue and return through finally.
- `14_error_messages_tour.js` — Exact messages of common TypeErrors.
- `15_range_error_messages.js` — RangeErrors and SyntaxErrors from built-ins.
- `16_error_rethrow_filter.js` — Filtering by type and rethrowing the rest.
- `17_stack_traces.js` — What stack traces contain and captureStackTrace.
- `18_printing_errors.js` — console.log of error objects inside containers.
- `19_assert_helpers.js` — A miniature test framework counting passes and failures.
- `20_parser_errors.js` — A small parser reporting line and column of errors.

## 11_maps_sets/ — Map, Set, WeakMap and typed arrays (20 programs)

- `01_map_basics.js` — Map: set, get, has, delete, size and key types.
- `02_map_iteration.js` — Insertion order, iteration during mutation, conversions.
- `03_set_basics.js` — Set: uniqueness, add, has, delete and iteration.
- `04_set_algebra.js` — Union, intersection, difference and subsets.
- `05_word_frequency_map.js` — Word frequencies using Map, with sorted output.
- `06_weakmap_weakset.js` — WeakMap and WeakSet for private data and marks.
- `07_lru_cache.js` — An LRU cache using Map's insertion order.
- `08_multimap_groupby.js` — Multimaps and Map.groupBy-like helpers.
- `09_graph_with_maps.js` — Adjacency maps and sets with degree counts.
- `10_memo_with_map.js` — Object keys in memoization, and nested map keys.
- `11_typed_arrays.js` — Typed arrays: construction, clamping, wraparound and views.
- `12_dataview_bytes.js` — DataView endianness and packing records into bytes.
- `13_sieve_typed.js` — A prime sieve on Uint8Array and bit tricks.
- `14_set_dedupe_objects.js` — Deduplicating objects by key, and order preservation.
- `15_map_with_objects_print.js` — How Map and Set print with nesting and length.
- `16_counter_class.js` — A Counter like Python's, on top of Map.
- `17_bimap_ordered.js` — A two-way map and a sorted map.
- `18_sets_of_strings.js` — Sets for spelling checks, pangrams and shared letters.
- `19_map_vs_object.js` — Differences between Map and plain objects as dictionaries.
- `20_array_buffer_slicing.js` — Copy semantics: slice, subarray, set, and structuredClone.

## 12_recursion/ — Recursion (20 programs)

- `01_towers_of_hanoi.js` — Towers of Hanoi: moves and counts.
- `02_permutations.js` — All permutations of a string, with duplicates removed.
- `03_subsets_powerset.js` — Subsets of a set and subset sums.
- `04_n_queens.js` — N-Queens: solutions and one printed board.
- `05_ackermann_mutual.js` — Ackermann, mutual recursion and Hofstadter sequences.
- `06_gcd_power_recursive.js` — gcd, fast power, digit sums and reverses.
- `07_flatten_deep.js` — Deep operations on nested structures.
- `08_binary_search_rec.js` — Recursive binary search and merge of sorted lists.
- `09_maze_solver.js` — Solving a text maze by backtracking.
- `10_flood_fill.js` — Flood fill and counting islands.
- `11_sudoku_solver.js` — A backtracking Sudoku solver.
- `12_expression_parser.js` — Recursive-descent arithmetic parser and evaluator.
- `13_tree_recursion.js` — Binary tree height, sum, mirror and paths.
- `14_generate_parens.js` — Balanced parentheses, and Catalan numbers.
- `15_combinations_sum.js` — Combination sum, coin ways and partitions of a number.
- `16_string_recursion.js` — Recursive string tasks: edit distance, palindromes, wildcards.
- `17_koch_sierpinski.js` — Fractals in text: Sierpinski, Koch lengths, Cantor set.
- `18_deep_object_ops.js` — Recursive freeze, merge, path listing and comparisons.
- `19_tail_calls_stack.js` — Deep recursion limits and converting to a loop.
- `20_gray_code_bits.js` — Gray codes, bit strings and n-digit counting.

## 13_sorting/ — Sorting algorithms (20 programs)

- `01_bubble_sort.js` — Bubble sort with early exit and swap counts.
- `02_selection_sort.js` — Selection sort with a printed trace.
- `03_insertion_sort.js` — Insertion sort, stable with a key function.
- `04_merge_sort.js` — Merge sort, counting inversions.
- `05_quick_sort.js` — Quicksort in place with Hoare partition, and functional style.
- `06_heap_sort.js` — Heapsort with sift-down, and top-k.
- `07_counting_radix.js` — Counting sort and LSD radix sort.
- `08_bucket_shell.js` — Bucket sort for fractions and Shell sort with gaps.
- `09_comb_cocktail_gnome.js` — Comb, cocktail-shaker and gnome sorts.
- `10_custom_comparators.js` — Sorting records by multiple keys and comparator combinators.
- `11_topk_quickselect.js` — Quickselect for the k-th smallest, and top-k with a heap.
- `12_sort_stability.js` — Verifying stability of Array.prototype.sort.
- `13_sort_strings.js` — String sorting: case, length, locale and natural order.
- `14_sort_dates_mixed.js` — Sorting dates, booleans and mixed values with explicit keys.
- `15_sort_algorithm_race.js` — Counting comparisons across algorithms on the same data.
- `16_dutch_flag_partition.js` — Dutch national flag, stable partition and moving zeros.
- `17_tim_merge_runs.js` — Natural merge sort: finding runs and merging them.
- `18_external_kway.js` — K-way merge of sorted lists using a small heap.
- `19_pancake_cycle.js` — Pancake sort and cycle sort counting writes.
- `20_sort_by_frequency.js` — Sort by frequency, by custom alphabets and by computed rank.

## 14_searching/ — Searching (20 programs)

- `01_linear_search.js` — Linear search variants: first, last, all, with sentinels.
- `02_binary_search.js` — Binary search with lower and upper bounds.
- `03_answer_search.js` — Binary search on the answer: roots, shipping, min-max.
- `04_rotated_search.js` — Searching rotated arrays and finding pivots.
- `05_matrix_search.js` — Searching sorted matrices.
- `06_substring_search.js` — Substring search: naive and KMP.
- `07_two_sum_family.js` — Two sum, three sum and subarray sum with hashing.
- `08_bfs_grid_search.js` — Shortest path in a grid with BFS.
- `09_interval_search.js` — Merging intervals, insertion and point queries.
- `10_peak_missing.js` — Peak finding, missing numbers and majority vote.
- `11_exponential_interpolation.js` — Exponential, interpolation and jump search.
- `12_longest_runs.js` — Longest consecutive runs and unique windows.
- `13_closest_pairs.js` — Closest values, closest pair of points and nearest in sorted.
- `14_trie_prefix_search.js` — Prefix search and autocomplete with a trie.
- `15_kth_elements.js` — K-th of two sorted arrays and median of streams.
- `16_ternary_golden.js` — Ternary and golden-section search for extrema.
- `17_word_ladder.js` — BFS over words: a word ladder with path recovery.
- `18_pattern_in_grid.js` — Word search in a letter grid with backtracking.
- `19_bloom_hash_search.js` — A Bloom filter and open-addressing hash table.
- `20_search_records.js` — Query helpers over a table of records.

## 15_data_structures/ — Data structures (20 programs)

- `01_stack_applications.js` — Stacks: balanced brackets, RPN and next greater element.
- `02_queue_circular.js` — A ring buffer queue and a deque.
- `03_linked_list_ops.js` — Linked lists: reverse, middle, cycle detection, merge.
- `04_doubly_linked.js` — A doubly linked list with remove and iteration both ways.
- `05_binary_heap.js` — A binary min-heap and a priority queue.
- `06_bst.js` — A binary search tree: insert, find, delete, in-order, height.
- `07_avl_rotations.js` — An AVL tree keeping balance through rotations.
- `08_trie_map.js` — A trie with counts, word removal and longest common prefix.
- `09_union_find.js` — Disjoint sets with path compression and union by size.
- `10_segment_fenwick.js` — A segment tree and a Fenwick tree for range sums.
- `11_hash_table_chaining.js` — A hash table with chaining and resizing.
- `12_skip_list.js` — A skip list using a seeded coin flip.
- `13_matrix_graph_rep.js` — Sparse matrices stored as maps.
- `14_rope_gap_buffer.js` — A gap buffer text editor model.
- `15_min_stack_max_queue.js` — A stack with min and a queue with a sliding maximum.
- `16_lru_lfu.js` — An LFU cache with frequency buckets.
- `17_graph_class.js` — A directed graph class with cycle detection and topological order.
- `18_interval_tree_simple.js` — Interval scheduling and a calendar with overlap checks.
- `19_serialization_tree.js` — Serializing a binary tree and rebuilding it.
- `20_persistent_list.js` — Immutable persistent stacks with structural sharing.

## 16_graphs/ — Graph algorithms (20 programs)

- `01_bfs_levels.js` — Breadth-first search with levels and shortest paths.
- `02_dfs_orders.js` — Depth-first search: pre-order, post-order and edge kinds.
- `03_dijkstra.js` — Dijkstra's algorithm with a binary heap.
- `04_bellman_ford.js` — Bellman-Ford with negative edges and cycle detection.
- `05_floyd_warshall.js` — All-pairs shortest paths, printed as a table.
- `06_topological_sort.js` — Kahn's algorithm and DFS-based ordering for course plans.
- `07_kruskal_prim.js` — Minimum spanning trees by Kruskal and Prim.
- `08_scc_tarjan.js` — Strongly connected components by Tarjan.
- `09_bipartite_coloring.js` — Bipartite checks and greedy graph coloring.
- `10_cycle_detection.js` — Cycles in directed and undirected graphs.
- `11_connected_components.js` — Connected components, bridges and articulation points.
- `12_grid_shortest.js` — Grid shortest paths: BFS with obstacles, and A*.
- `13_max_flow.js` — Maximum flow with Edmonds-Karp.
- `14_euler_paths.js` — Eulerian paths by Hierholzer's algorithm.
- `15_traveling_salesman.js` — TSP by bitmask dynamic programming.
- `16_dag_longest_path.js` — Longest path and path counts in a DAG.
- `17_social_network.js` — Friends of friends, degrees and common neighbours.
- `18_dependency_resolver.js` — Resolving package dependencies with versions and cycles.
- `19_islands_grid_graph.js` — Grid connectivity: rotting oranges and shortest bridge length.
- `20_page_rank.js` — PageRank by power iteration.

## 17_dynamic_programming/ — Dynamic programming (20 programs)

- `01_fibonacci_ways.js` — Fibonacci four ways: memo, table, constant space and matrix.
- `02_climbing_stairs.js` — Counting ways: stairs, tilings and decoding messages.
- `03_coin_change.js` — Minimum coins and number of ways.
- `04_knapsack.js` — 0/1, unbounded and subset-sum knapsacks with item recovery.
- `05_lcs_edit_distance.js` — Longest common subsequence and edit distance with traceback.
- `06_lis.js` — Longest increasing subsequence: O(n^2) and patience.
- `07_max_subarray_product.js` — Maximum subarray sum, product and circular variants.
- `08_grid_paths.js` — Unique paths, minimum path sum and maximal square.
- `09_house_robber.js` — Non-adjacent choices: robber, circular and tree variants.
- `10_palindrome_dp.js` — Palindromic substrings, subsequences and minimal cuts.
- `11_word_break.js` — Word break with reconstruction.
- `12_interval_dp.js` — Matrix chain, burst balloons and optimal merging.
- `13_string_dp_matching.js` — Regex and wildcard matching with tables.
- `14_stock_states.js` — State-machine DP on stock trading.
- `15_jump_game.js` — Jump game, gas stations and greedy-vs-DP checks.
- `16_triangle_pascal.js` — Pascal's triangle, Catalan numbers and triangle min-path.
- `17_digit_dp.js` — Counting numbers by digit properties.
- `18_bitmask_dp.js` — Bitmask DP: assignment problem and Hamiltonian counts.
- `19_game_theory_dp.js` — Win/lose DP: Nim, stone games and optimal play.
- `20_scheduling_dp.js` — Weighted interval scheduling and task assignment.

## 18_number_theory/ — Number theory (20 programs)

- `01_primes_sieve.js` — Trial division, Eratosthenes and counting primes.
- `02_gcd_lcm.js` — Euclid, extended Euclid, LCM and coprimes.
- `03_factorization.js` — Prime factors, divisors and perfect numbers.
- `04_modular_arithmetic.js` — Modular exponentiation, BigInt powers and Fermat's test.
- `05_chinese_remainder.js` — Chinese remainder theorem and linear congruences.
- `06_digits_narcissistic.js` — Digit tricks: sums, reversals, Armstrong and Harshad numbers.
- `07_bigint_big_results.js` — Big factorials, Fibonacci and digit sums with BigInt.
- `08_number_bases.js` — Base conversion with BigInt and balanced ternary.
- `09_figurate_numbers.js` — Triangular, square, pentagonal and palindromic numbers.
- `10_goldbach_twins.js` — Goldbach partitions, twin primes and prime gaps.
- `11_sum_series.js` — Series: harmonic, Leibniz pi, e, and Euler's sum.
- `12_continued_fractions.js` — Continued fractions and rational approximations.
- `13_combinatorics.js` — Permutations, combinations, stars-and-bars and derangements.
- `14_calendar_math.js` — Calendar computations: Easter, weekday counts, Julian days.
- `15_lucky_kaprekar.js` — Kaprekar's routine, look-and-say and Lychrel checks.
- `16_perfect_powers.js` — Powers, roots and integer logs.
- `17_pollard_rho.js` — Integer factorization with Pollard's rho on BigInt.
- `18_rational_egyptian.js` — Egyptian fractions and Farey sequences.
- `19_project_euler_mix.js` — A handful of classic Project Euler answers.
- `20_number_puzzles.js` — Number spirals, Josephus and self-describing digits.

## 19_string_algorithms/ — String algorithms (20 programs)

- `01_kmp_z_rabin.js` — Pattern matching: KMP table, Z-function and Rabin-Karp.
- `02_boyer_moore_aho.js` — Boyer-Moore-Horspool and Aho-Corasick matching.
- `03_suffix_array.js` — Suffix arrays, LCP and longest repeated substring.
- `04_manacher.js` — Manacher's algorithm for longest palindromic substring.
- `05_huffman.js` — Huffman coding: build, encode, decode.
- `06_lz_compression.js` — LZ77 and LZW compression round trips.
- `07_base64_hex.js` — Base64 and hex by hand, checked against Buffer.
- `08_checksums_hashes.js` — CRC32, Adler-32, FNV and DJB string hashes.
- `09_sha256_impl.js` — SHA-256 implemented with 32-bit operations.
- `10_tokenizer.js` — A tokenizer and a tiny JSON parser written by hand.
- `11_string_transforms.js` — BWT, move-to-front and rotations of strings.
- `12_diff_lcs_lines.js` — A line diff built on LCS.
- `13_string_similarity.js` — Jaro-Winkler, Hamming, Levenshtein ratio and Soundex.
- `14_string_parsers_csv.js` — A CSV parser with quoted fields and a query-string parser.
- `15_big_number_strings.js` — Arithmetic on decimal strings: add, multiply, compare.
- `16_string_wrap_justify.js` — Full justification of text.
- `17_zigzag_roman_strings.js` — Zigzag conversion, number spelling and string compression.
- `18_string_dedupe_order.js` — Removing duplicates while keeping order and smallest forms.
- `19_template_engine.js` — A template engine with loops, conditions and filters.
- `20_morse_vigenere.js` — Morse code, Vigenere, atbash and rail-fence ciphers.

## 20_text_json_dates/ — Text processing, JSON and dates (20 programs)

- `01_word_statistics.js` — Word counts, averages and longest words from a passage.
- `02_csv_report.js` — Parsing CSV text into records and summarizing by column.
- `03_log_analysis.js` — Parsing log lines with regexes and tallying levels.
- `04_json_transform.js` — Transforming nested JSON: flatten, unflatten, and pretty print.
- `05_date_basics.js` — Date: construction, getters, UTC methods and arithmetic.
- `06_date_calendar_print.js` — Printing a month calendar with UTC dates.
- `07_date_differences.js` — Age, durations and business days.
- `08_intl_formatting.js` — Intl: number, date, list and relative-time formats.
- `09_string_tables.js` — Rendering aligned text tables and bar charts.
- `10_markdown_to_html.js` — A small Markdown to HTML converter.
- `11_ini_config_parser.js` — INI and key=value parsing with sections and typed values.
- `12_url_path_utils.js` — Node's path and url modules, and hand-written helpers.
- `13_string_escape_tools.js` — HTML, regex and shell escaping, and slug generation.
- `14_text_diff_stats.js` — Counting characters, lines, Unicode classes in text.
- `15_data_pipeline.js` — A sales pipeline: parse, filter, group, join, rank.
- `16_console_table_group.js` — console.table, group, dir and count output.
- `17_util_inspect.js` — util.inspect options: depth, colors off, compact, sorted, breakLength.
- `18_string_number_tables.js` — Number formatting tables: widths, signs, exponents.
- `19_structured_clone_json_edge.js` — JSON and structuredClone with special values.
- `20_invoice_generator.js` — An invoice with line items, tax, dates and totals.

## 21_async_promises/ — Promises, async/await and timers (20 programs)

- `01_promise_basics.js` — Creating promises, then, catch and finally.
- `02_event_loop_order.js` — Sync code, microtasks, nextTick, timers, immediates in order.
- `03_async_await.js` — async functions, await and try/catch.
- `04_promise_combinators.js` — all, allSettled, race and any.
- `05_sequential_parallel.js` — Sequential vs parallel awaits, and order of completion.
- `06_timers.js` — setTimeout, setInterval, clear and ordering by delay.
- `07_retry_with_backoff.js` — Async retries, timeouts and backoff delays.
- `08_concurrency_limit.js` — A promise pool limiting concurrent tasks.
- `09_async_generators.js` — Async generators as streams, with pipeline helpers.
- `10_event_emitter_async.js` — EventEmitter with once, promises and error events.
- `11_task_queue.js` — A sequential async task queue with priorities.
- `12_async_errors.js` — Rejections through chains, await, finally, and nested try.
- `13_thenables.js` — Thenables, resolution order and promise-resolve ticks.
- `14_async_map_filter.js` — Async array helpers with order preserved.
- `15_abort_cancel.js` — AbortController, AbortSignal and cancellable sleeps.
- `16_timers_promises_module.js` — timers/promises, util.promisify and callback conversion.
- `17_producer_consumer.js` — Producer and consumer with an async channel.
- `18_debounce_throttle.js` — Debounce and throttle with timers.
- `19_async_iter_streams.js` — Node streams: Readable.from, Transform and pipeline.
- `20_async_state_machine.js` — An order workflow simulated with async steps.

## 22_functional/ — Functional programming (20 programs)

- `01_pure_functions.js` — Pure transformations of immutable data with spread.
- `02_reduce_everything.js` — map, filter, flat, reverse and groupBy written with reduce.
- `03_maybe_either.js` — Maybe and Either as small functional containers.
- `04_transducers.js` — Transducers: composing transforms without intermediate arrays.
- `05_lenses.js` — Functional lenses for nested reads and writes.
- `06_point_free.js` — Point-free helpers: prop, eq, sortBy, uniqBy, and pipelines.
- `07_memo_and_y.js` — Fixed-point combinators and memoized recursion.
- `08_parser_combinators.js` — Parser combinators for a little expression language.
- `09_immutable_updates.js` — Reducers and Redux-like stores from pure functions.
- `10_function_algebra.js` — Monoids, functors and folding with them.
- `11_lazy_lists.js` — Lazy streams from thunks: primes, Fibonacci, iterate.
- `12_data_last_utils.js` — Grouping, sorting, zipping and pivoting with small utilities.
- `13_interpreter_closure.js` — A Lisp interpreter using closures for environments.
- `14_compose_validators.js` — Composable validators collecting errors.
- `15_trampolines_cps.js` — Continuation-passing style and trampolined recursion.
- `16_functional_strings.js` — String processing as function pipelines.
- `17_generic_tree_fold.js` — Catamorphisms: folding trees and JSON values generically.
- `18_pipeline_operator_style.js` — Chained array transforms on a realistic dataset.
- `19_partial_placeholders.js` — Partial application with placeholders and arity tricks.
- `20_event_sourcing.js` — Event sourcing: rebuilding state by folding events.

## 23_regex_patterns/ — Regular expressions (20 programs)

- `01_test_exec_flags.js` — test, exec, flags, lastIndex and RegExp properties.
- `02_character_classes.js` — Character classes, shorthands and quantifiers.
- `03_groups_named.js` — Capturing, non-capturing and named groups, backreferences.
- `04_lookaround.js` — Lookahead and lookbehind assertions.
- `05_global_matchall.js` — match, matchAll and replace callbacks with state.
- `06_validation_patterns.js` — Common validators: email, URL, IPv4, hex colors, dates.
- `07_tokenize_with_regex.js` — A sticky-flag tokenizer and a template tag scanner.
- `08_regex_replace_tools.js` — Trim, squeeze, title-case and format using replace.
- `09_parse_with_regex.js` — Extracting structured data from free text.
- `10_unicode_regex.js` — Unicode property escapes and the u and v flags.
- `11_regex_split_join.js` — split with regexes in many shapes.
- `12_regex_engine_mini.js` — A tiny backtracking regex matcher written by hand.
- `13_replace_special_patterns.js` — Replacement strings: $$, $&, $`, $', $n, and functions.
- `14_regex_state_gotchas.js` — lastIndex surprises, shared literals and flag interactions.
- `15_syntax_highlight.js` — A toy syntax highlighter that marks tokens with tags.
- `16_wildcards_globs.js` — Converting globs to regexes and matching file names.
- `17_number_regex.js` — Parsing numbers, units and dates with regexes.
- `18_regex_backtracking.js` — Greedy, lazy, alternation order and backtracking results.
- `19_regex_csv_log_mix.js` — Parsing CSV lines and Apache log lines with one regex each.
- `20_regex_stats_words.js` — Word classification by regex over a word list.

## 24_metaprogramming/ — Proxy, Reflect, Symbol and metaprogramming (20 programs)

- `01_proxy_basics.js` — Proxy traps: get, set, has, deleteProperty, ownKeys.
- `02_validation_proxy.js` — Proxies that validate writes and enforce types.
- `03_function_proxies.js` — apply and construct traps: logging, memoizing, currying.
- `04_reflect_api.js` — The Reflect namespace.
- `05_symbols_well_known.js` — Well-known symbols customizing language behaviour.
- `06_descriptors_defineprops.js` — Property descriptors: flags, accessors and class helpers.
- `07_eval_new_function.js` — eval, indirect eval and new Function scope rules.
- `08_dynamic_classes.js` — Building classes at run time.
- `09_prototype_patching.js` — Extending built-ins and undoing it; method_missing via Proxy.
- `10_getters_on_prototype.js` — Accessors, Object.entries on classes, and enumerate methods.
- `11_reactive_system.js` — A small reactive store using Proxy and dependency tracking.
- `12_orm_style.js` — A tiny ORM: dynamic finders, validation and method chaining.
- `13_serializer_introspect.js` — Generic serialization walking types with constructors.
- `14_decorator_like.js` — Decorator-style wrappers for methods and classes.
- `15_with_labels_sloppy.js` — Sloppy-mode relics: with, arguments.callee, implicit globals.
- `16_tagged_templates_dsl.js` — DSLs with tagged templates: SQL, HTML, and cached strings.
- `17_getter_chain_builders.js` — Fluent builders with getters and Proxy-free chaining.
- `18_inspect_custom_symbols.js` — Controlling how objects print with util.inspect.custom.
- `19_call_stack_introspect.js` — Stack inspection, caller names and prepareStackTrace.
- `20_plugin_hooks.js` — Hook systems: wrapping functions, before and after advice.

## 25_puzzles_simulations/ — Puzzles and simulations (20 programs)

- `01_game_of_life.js` — Conway's Game of Life on a small torus.
- `02_tic_tac_toe_ai.js` — Tic-tac-toe with a perfect minimax player.
- `03_bank_queue_sim.js` — A discrete-event bank queue with a seeded generator.
- `04_elevator_sim.js` — An elevator serving requests with the SCAN policy.
- `05_vending_machine.js` — A vending machine state machine with change-making.
- `06_robot_grid.js` — A robot following commands on a grid, with obstacles.
- `07_card_deck.js` — A seeded deck: shuffling, dealing and poker hand ranks.
- `08_text_adventure.js` — A scripted text adventure with rooms and inventory.
- `09_sudoku_checker_magic.js` — Magic squares, Latin squares and sudoku validity.
- `10_river_crossing.js` — Wolf, goat, cabbage and water jugs by BFS.
- `11_eight_puzzle.js` — The eight puzzle with A* and Manhattan distance.
- `12_cellular_rule_automata.js` — Rule 30, rule 90 and Langton's ant.
- `13_tower_blocks_stack.js` — Blocks world and rain water: stack-shaped puzzles.
- `14_knights_tour_queens.js` — Knight's tour with Warnsdorff's rule, and knight distances.
- `15_mastermind_hangman.js` — Mastermind scoring and scripted Hangman.
- `16_bowling_scores.js` — Bowling scores, tennis games and cricket-style tallies.
- `17_minesweeper_battleship.js` — Minesweeper numbers and reveal flood.
- `18_lights_out_nim.js` — Lights Out by Gaussian elimination, and Nim play.
- `19_population_markov.js` — Predator-prey, Markov weather and random-walk simulations.
- `20_mini_vm.js` — A stack virtual machine running a small program.
