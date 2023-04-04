var documenterSearchIndex = {"docs":
[{"location":"_index/","page":"-","title":"-","text":"CurrentModule = AirspeedVelocity","category":"page"},{"location":"_index/","page":"-","title":"-","text":"<README>","category":"page"},{"location":"_index/","page":"-","title":"-","text":"Pages = [\"api.md\"]","category":"page"},{"location":"_index/","page":"-","title":"-","text":"Modules = [AirspeedVelocity]","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#Creating-benchmarks","page":"API","title":"Creating benchmarks","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"benchmark(package_name::String, rev::Vector{String}; output_dir::String=\".\", script::Union{String,Nothing}=nothing, tune::Bool=false, exeflags::Cmd=``, extra_pkgs::Vector{String}=String[])","category":"page"},{"location":"api/#AirspeedVelocity.Utils.benchmark-Tuple{String, Vector{String}}","page":"API","title":"AirspeedVelocity.Utils.benchmark","text":"benchmark(package_name::String, rev::Union{String,Vector{String}}; output_dir::String=\".\", script::Union{String,Nothing}=nothing, tune::Bool=false, exeflags::Cmd=``, extra_pkgs::Vector{String}=String[])\n\nRun benchmarks for a given Julia package.\n\nThis function runs the benchmarks specified in the script for the package defined by the package_spec. If script is not provided, the function will use the default benchmark script located at {PACKAGE_SRC_DIR}/benchmark/benchmarks.jl.\n\nThe benchmarks are run using the SUITE variable defined in the benchmark script, which should be of type BenchmarkTools.BenchmarkGroup. The benchmarks can be run with or without tuning depending on the value of the tune argument.\n\nThe results of the benchmarks are saved to a JSON file named results_packagename@rev.json in the specified output_dir.\n\nArguments\n\npackage_name::String: The name of the package for which to run the benchmarks.\nrev::Union{String,Vector{String}}: The revision of the package for which to run the benchmarks. You can also pass a vector of revisions to run benchmarks for multiple versions of a package.\noutput_dir::String=\".\": The directory where the benchmark results JSON file will be saved (default: current directory).\nscript::Union{String,Nothing}=nothing: The path to the benchmark script file. If not provided, the default script at {PACKAGE}/benchmark/benchmarks.jl will be used.\ntune::Bool=false: Whether to run benchmarks with tuning (default: false).\nexeflags::Cmd=``: Additional execution flags for running the benchmark script (default: empty).\nextra_pkgs::Vector{String}=String[]: Additional packages to add to the benchmark environment.\nurl::Union{String,Nothing}=nothing: URL of the package.\nbenchmark_on::Union{String,Nothing}=nothing: If the benchmark script file is to be downloaded, this specifies the revision to use.\n\n\n\n\n\n","category":"method"},{"location":"api/","page":"API","title":"API","text":"benchmark(package_specs::Vector{PackageSpec}; output_dir::String = \".\", script::Union{String,Nothing} = nothing, tune::Bool = false, exeflags::Cmd = ``, extra_pkgs = String[])","category":"page"},{"location":"api/#AirspeedVelocity.Utils.benchmark-Tuple{Vector{Pkg.Types.PackageSpec}}","page":"API","title":"AirspeedVelocity.Utils.benchmark","text":"benchmark(package_specs::Union{PackageSpec,Vector{PackageSpec}}; output_dir::String=\".\", script::Union{String,Nothing}=nothing, tune::Bool=false, exeflags::Cmd=``, extra_pkgs::Vector{String}=String[])\n\nRun benchmarks for a given Julia package.\n\nThis function runs the benchmarks specified in the script for the package defined by the package_spec. If script is not provided, the function will use the default benchmark script located at {PACKAGE_SRC_DIR}/benchmark/benchmarks.jl.\n\nThe benchmarks are run using the SUITE variable defined in the benchmark script, which should be of type BenchmarkTools.BenchmarkGroup. The benchmarks can be run with or without tuning depending on the value of the tune argument.\n\nThe results of the benchmarks are saved to a JSON file named results_packagename@rev.json in the specified output_dir.\n\nArguments\n\npackage::Union{PackageSpec,Vector{PackageSpec}}: The package specification containing information about the package for which to run the benchmarks. You can also pass a vector of package specifications to run benchmarks for multiple versions of a package.\noutput_dir::String=\".\": The directory where the benchmark results JSON file will be saved (default: current directory).\nscript::Union{String,Nothing}=nothing: The path to the benchmark script file. If not provided, the default script at {PACKAGE}/benchmark/benchmarks.jl will be used.\ntune::Bool=false: Whether to run benchmarks with tuning (default: false).\nexeflags::Cmd=``: Additional execution flags for running the benchmark script (default: empty).\nextra_pkgs::Vector{String}=String[]: Additional packages to add to the benchmark environment.\nbenchmark_on::Union{String,Nothing}=nothing: If the benchmark script file is to be downloaded, this specifies the revision to use.\n\n\n\n\n\n","category":"method"},{"location":"api/#Loading-benchmarks","page":"API","title":"Loading benchmarks","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"load_results(specs::Vector{PackageSpec}; input_dir::String=\".\")","category":"page"},{"location":"api/#AirspeedVelocity.PlotUtils.load_results-Tuple{Vector{Pkg.Types.PackageSpec}}","page":"API","title":"AirspeedVelocity.PlotUtils.load_results","text":"load_results(specs::Vector{PackageSpec}; input_dir::String=\".\")\n\nLoad the results from JSON files for each PackageSpec in the specs vector. The function assumes that the JSON files are located in the input_dir directory and are named as \"results_{s}.json\" where s is equal to PackageName@Rev.\n\nThe function returns a combined OrderedDict, to be input to the combined_plots function.\n\nArguments\n\nspecs::Vector{PackageSpec}: Vector of each package revision to be loaded (as PackageSpec).\ninput_dir::String=\".\": Directory where the results. Default is current directory.\n\nReturns\n\nOrderedDict{String,OrderedDict}: Combined results ready to be passed to the combined_plots function.\n\n\n\n\n\n","category":"method"},{"location":"api/","page":"API","title":"API","text":"combined_plots(combined_results::OrderedDict; npart=10)","category":"page"},{"location":"api/#AirspeedVelocity.PlotUtils.combined_plots-Tuple{OrderedDict}","page":"API","title":"AirspeedVelocity.PlotUtils.combined_plots","text":"combined_plots(combined_results::OrderedDict; npart=10)\n\nCreate a combined plot of the results loaded from load_results function. The function partitions the plots into smaller groups of size npart (defaults to 10) and combines the plots in each group vertically. It returns an array of combined plots.\n\nArguments\n\ncombined_results::OrderedDict: Data to be plotted, obtained from the load_results function.\nnpart::Int=10: Max plots to be combined in a single vertical group. Default is 10.\n\nReturns\n\nArray{Plots.Plot{Plots.GRBackend},1}: An array of combined Plots objects, with each element representing a group of up to npart vertical plots.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = AirspeedVelocity","category":"page"},{"location":"#AirspeedVelocity.jl","page":"Home","title":"AirspeedVelocity.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Coverage)","category":"page"},{"location":"","page":"Home","title":"Home","text":"AirspeedVelocity.jl strives to make it easy to benchmark Julia packages over their lifetime. It is inspired by asv.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package allows you to:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Generate benchmarks directly from the terminal with an easy-to-use CLI.\nQuery many commits/tags/branches at a time.\nPlot those benchmarks, automatically flattening your benchmark suite into a list of plots with generated titles, with the x-axis showing revisions.","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package also freezes the benchmark script at a particular revision, so there is no worry about the old history overwriting the benchmark.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can install the CLI with:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia -e 'using Pkg; \\\n          Pkg.add(url=\"https://github.com/MilesCranmer/AirspeedVelocity.jl.git\"); \\\n          Pkg.build(\"AirspeedVelocity\")'","category":"page"},{"location":"","page":"Home","title":"Home","text":"This will install two executables at ~/.julia/bin - make sure to have it on your PATH.","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You may then use the CLI to generate benchmarks for any package with, e.g.,","category":"page"},{"location":"","page":"Home","title":"Home","text":"benchpkg Transducers \\\n    --rev=v0.4.20,v0.4.70,master \\\n    --bench-on=v0.4.20 \\\n    --add=BangBang,ArgCheck,Referenceables,SplitApplyCombine","category":"page"},{"location":"","page":"Home","title":"Home","text":"which will benchmark Transducers.jl, at the revisions v0.4.20, v0.4.70, and master, using the benchmark script benchmark/benchmarks.jl as it was defined at v0.4.20, and then save the JSON results in the current directory. With the --add option, we also specify some additional packages which are needed inside the benchmarks.","category":"page"},{"location":"","page":"Home","title":"Home","text":"One can then generate plots of the revisions with:","category":"page"},{"location":"","page":"Home","title":"Home","text":"benchpkgplot Transducers \\\n    --rev=v0.4.20,v0.4.70,master \\\n    --format=pdf \\\n    --npart=5","category":"page"},{"location":"","page":"Home","title":"Home","text":"which will generate a pdf file for each set of 5 plots, showing the change with each revision:","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img width=\"877\" alt=\"Screenshot 2023-04-03 at 10 36 16 AM\" src=\"https://user-images.githubusercontent.com/7593028/229543368-14b1da88-8315-437b-b38f-fff143f26e3a.png\">","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also provide a custom benchmark. For example, let's say you have a file script.jl, defining a benchmark for SymbolicRegression.jl:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using BenchmarkTools, SymbolicRegression\nconst SUITE = BenchmarkGroup()\nSUITE[\"eval_tree_array\"] = begin\n    b = BenchmarkGroup()\n    options = Options(; binary_operators=[+, -, *], unary_operators=[cos])\n    tree = Node(; feature=1) + cos(3.2f0 * Node(; feature=2))\n    X = randn(Float32, 2, 10)\n    f() = eval_tree_array(tree, X, options)\n    b[\"10\"] = @benchmarkable f() evals=1 samples=100\n\n    X2 = randn(Float32, 2, 20)\n    f2() = eval_tree_array(tree, X2, options)\n    b[\"20\"] = @benchmarkable f2() evals=1 samples=100\n    b\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"we can run this benchmark over the history of SymbolicRegression.jl with:","category":"page"},{"location":"","page":"Home","title":"Home","text":"benchpkg SymbolicRegression \\\n    -r v0.15.3,v0.16.2 \\\n    -s script.jl \\\n    -o results/ \\\n    --exeflags=\"--threads=4 -O3\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"where we have also specified the output directory and extra flags to pass to the julia executable. We can also now visualize this:","category":"page"},{"location":"","page":"Home","title":"Home","text":"benchpkgplot SymbolicRegression \\\n    -r v0.15.3,v0.16.2 \\\n    -i results/ \\\n    -o plots/","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"For running benchmarks, you can use the benchpkg command, which is built into the ~/.julia/bin folder:","category":"page"},{"location":"","page":"Home","title":"Home","text":"    benchpkg package_name [-r --rev <arg>] [-o, --output-dir <arg>]\n                          [-s, --script <arg>] [-e, --exeflags <arg>]\n                          [-a, --add <arg>] [-t, --tune]\n                          [-u, --url <arg>]\n\nBenchmark a package over a set of revisions.\n\n# Arguments\n\n- `package_name`: Name of the package.\n\n# Options\n\n- `-r, --rev <arg>`: Revisions to test (delimit by comma).\n- `-o, --output-dir <arg>`: Where to save the JSON results.\n- `-s, --script <arg>`: The benchmark script. Default: `benchmark/benchmarks.jl` downloaded from `stable`.\n- `-e, --exeflags <arg>`: CLI flags for Julia (default: none).\n- `-a, --add <arg>`: Extra packages needed (delimit by comma).\n- `-u, --url <arg>`: URL of the package.\n- `--bench-on <arg>`: If the script is not set, this specifies the revision of `benchmarks.jl`.\n\n# Flags\n\n- `-t, --tune`: Whether to run benchmarks with tuning (default: false).","category":"page"},{"location":"","page":"Home","title":"Home","text":"For plotting, you can use the benchpkgplot function:","category":"page"},{"location":"","page":"Home","title":"Home","text":"    benchpkgplot package_name [-r --rev <arg>] [-i --input_dir <arg>]\n                              [-o --output-dir <arg>] [-n --npart <arg>]\n                              [-f --format <arg>]\n\nPlot the benchmarks of a package as created with `benchpkg`.\n\n# Arguments\n\n- `package_name`: Name of the package.\n\n# Options\n\n- `-r, --rev <arg>`: Revisions to test (delimit by comma).\n- `-i, --input-dir <arg>`: Where the JSON results were saved (default: \".\").\n- `-o, --output-dir <arg>`: Where to save the plots results (default: \".\").\n- `-n, --npart <arg>`: Max number of plots per page (default: 10).\n- `-f, --format <arg>`: File type to save the plots as (default: \"png\").","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you prefer to use the Julia API, you can use the benchmark function for generating data. The API is given here.","category":"page"},{"location":"#Related-packages","page":"Home","title":"Related packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Also be sure to check out PkgBenchmark.jl. PkgBenchmark.jl is a simple wrapper of BenchmarkTools.jl to interface it with Git, and is a good choice for building custom analysis workflows.","category":"page"},{"location":"","page":"Home","title":"Home","text":"However, for me this wrapper is a bit too thin, which is why I created this package. AirspeedVelocity.jl tries to have more features and workflows readily-available. It also emphasizes a CLI (though there is a Julia API), as my subjective view is that this is more suitable for interacting side-by-side with git.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"api.md\"]","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [AirspeedVelocity]","category":"page"}]
}
